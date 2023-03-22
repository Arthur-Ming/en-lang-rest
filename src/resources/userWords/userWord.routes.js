import Router from 'koa-router';
import { getUserWordsById, addUserWord, deleteUserWord } from './userWord.controllers.js';
import { checkAuthentication, mustBeAuthenticated } from '../../utils/authentication.js';
import validator from '../../utils/validation/validator.js';
import schemas from '../../utils/validation/schemas.js';

const { register, login } = schemas;

const userWordsRouter = new Router({ prefix: '/users/:userId/words' });

/* usersRouter.use(checkAuthentication); */

userWordsRouter
  .get('/', /*  mustBeAuthenticated, */ getUserWordsById)
  .post('/:wordId', /* validator(login, 'body'), */ addUserWord)
  .delete('/:wordId', /* validator(login, 'body'), */ deleteUserWord);

export default userWordsRouter;
