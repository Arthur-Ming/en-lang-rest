import { getById, add, remove } from './userWord.service.js';

export const getUserWordsById = async (ctx) => {
  const { userId } = ctx.params;
  ctx.body = await getById(userId);
};

export const addUserWord = async (ctx) => {
  const { userId, wordId } = ctx.params;
  ctx.body = await add(userId, wordId);
};

export const deleteUserWord = async (ctx) => {
  const { userId, wordId } = ctx.params;
  ctx.body = await remove(userId, wordId);
};
