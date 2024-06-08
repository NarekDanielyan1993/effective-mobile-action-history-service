import App from '@lib/app';
import errorMiddleware from '@middleware/error';
import routes from '@route/index';
import Config from '@utils/config';

const app = new App();

app.initializeMiddlewares();
app.initializeRoutes(routes);
app.addMiddleware(errorMiddleware);

app.init(Number(new Config().getEnv('PORT')) || 6000);
