import Koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import path from 'node:path';
import bodyParser from 'koa-bodyparser';
import errorHandler from './errors/errorHandler.js';
import cors from '@koa/cors';
import wordsRouter from './resources/words/word.routes.js';
import usersRouter from './resources/users/user.routes.js';
import userWordsRouter from './resources/userWords/userWord.routes.js';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = new Koa();

app.use(mount('/files', serve(path.join(__dirname, '../files'))));

app.use(cors());

app.use(errorHandler);

app.use(bodyParser());

app.use(wordsRouter.routes());
app.use(usersRouter.routes());
app.use(userWordsRouter.routes());

export default app;
