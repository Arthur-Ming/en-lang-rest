import Router from 'koa-router';
import { getWords } from './word.controllers.js';

const wordsRouter = Router({ prefix: '/words' });

wordsRouter.get('/', getWords);

export default wordsRouter;
