import Router from 'koa-router';
import validator from '../../utils/validation/validator.js';
import { getWords } from './word.controllers.js';

const wordsRouter = Router({ prefix: '/words' });

wordsRouter.get('/', getWords);
/* .get('/:boardId',  getBoardById)
  .post('/', validator(board, 'body'), creatBoard)
  .delete('/:boardId', validator(boardId, 'params'), deleteBoard)
  .put('/:boardId', validator(boardId, 'params'), validator(board, 'body'), updateBoard); */

export default wordsRouter;
