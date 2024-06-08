import { corsOptions } from '@constant/middleware';
import RabbitMQ from '@lib/rabbitmq';
import cors from 'cors';
import express from 'express';

class App {
    constructor() {
        this.expressApp = express();
    }

    initializeMiddlewares() {
        this.expressApp.use(express.urlencoded({ extended: true }));
        this.expressApp.use(express.json());
        this.expressApp.use(cors(corsOptions));
    }

    initializeRoutes(routes) {
        this.expressApp.use(routes);
    }

    addMiddleware(middleware) {
        this.expressApp.use(middleware);
    }

    addRoute(router) {
        this.expressApp.use(router);
    }

    async init(port) {
        try {
            this.expressApp.listen(port, async () => {
                console.log(`Server is running on port ${port}`);
                const rabbitmq = new RabbitMQ();
                await rabbitmq.connect();
                await rabbitmq.consumeMessages();
            });
        } catch (error) {
            console.log('error', error);
        }
    }

    getApp() {
        return this.expressApp;
    }
}

export default App;
