import { USER_ASSERT } from '@constant/messages';
import HistoryRepository from '@repository/history';
import HistoryService from '@service/history';
import Config from '@utils/config';
import amqplib from 'amqplib';

class RabbitMQ {
    constructor() {
        this.connection = null;
        this.channel = null;
    }

    async connect() {
        this.connection = await amqplib.connect(
            new Config().getEnv('RABBIT_MQ_URL'),
        );
        this.channel = await this.connection.createChannel();
        await this.channel.assertQueue(USER_ASSERT);
    }

    async consumeMessages() {
        if (this.channel) {
            this.channel.consume(USER_ASSERT, async (msg) => {
                if (msg !== null) {
                    const action = JSON.parse(msg.content.toString());
                    const historyRepo = new HistoryRepository();
                    const historyService = new HistoryService(historyRepo);
                    await historyService.logAction(action);
                    this.channel.ack(msg);
                }
            });
        }
    }
}

export default RabbitMQ;
