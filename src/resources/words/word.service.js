import getQueryNumberParameter from '../../utils/getQueryNumberParameter.js';
import { BadRequestError } from '../../errors/appErrors.js';
import Word from './word.model.js';

export const getWordByPageAndGroup = async (rawPage, rawGroup) => {
  const page = getQueryNumberParameter(rawPage, 0);
  const group = getQueryNumberParameter(rawGroup, 0);

  if (isNaN(page) || isNaN(group)) {
    throw new BadRequestError(
      'Wrong query parameters: the group, page numbers should be valid integers'
    );
  }

  return await Word.find({ page, group });
};
