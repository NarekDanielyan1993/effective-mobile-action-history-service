import prismaAdapter from '@lib/db';
import { InternalServerError } from '@lib/error';

class HistoryRepository {
    constructor(prisma = prismaAdapter) {
        this.prisma = prisma;
    }

    async create(historyData) {
        try {
            const history = await this.prisma.history.create({
                data: historyData,
            });
            return history;
        } catch (error) {
            throw new InternalServerError();
        }
    }

    async find(historyData) {
        try {
            const histories = await this.prisma.history.findMany({
                ...historyData,
            });
            return histories;
        } catch (error) {
            throw new InternalServerError();
        }
    }
}

export default HistoryRepository;
