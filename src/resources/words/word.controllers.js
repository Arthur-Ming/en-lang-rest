import { getWordByPageAndGroup } from './word.service.js';

export const getWords = async (ctx) => {
  const { page, group } = ctx.request.query;

  ctx.body = await getWordByPageAndGroup(page, group);
};
