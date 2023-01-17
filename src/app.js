import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import errorHandler from './errors/errorHandler.js';
import cors from '@koa/cors';
import wordsRouter from './resources/words/word.routes.js';

const app = new Koa();

app.use(cors());

app.use(errorHandler);

app.use(bodyParser());

app.use(wordsRouter.routes());

export default app;
