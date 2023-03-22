import User from '../users/user.model.js';
import UserWord from '../userWords/userWord.model.js';
import { NotFoundError, UnprocessableEntityError } from '../../errors/appErrors.js';

export const getById = async (userId) => {
  console.log('!!!');
  const user = await User.findById(userId);

  if (!user) {
    throw new NotFoundError('user', { id: userId });
  }

  const userWord = await UserWord.findOneAndUpdate(
    { userId },
    {},
    { upsert: true, new: true }
  ).populate({
    path: 'words',
  });

  /* await UserWord.create({userId});
  console.log(UserWord); */
  return userWord;
};

export const add = async (userId, wordId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new NotFoundError('user', { id: userId });
  }

  const userWord = await UserWord.findOneAndUpdate(
    { userId },
    { $push: { words: wordId } },
    { upsert: true, new: true }
  ).populate({
    path: 'words',
  });
  console.log(userWord);
  return userWord;
};

export const remove = async (userId, wordId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new NotFoundError('user', { id: userId });
  }

  const userWord = await UserWord.findOneAndUpdate(
    { userId },
    { $pull: { words: wordId } },
    { upsert: true, new: true }
  ).populate({
    path: 'words',
  });

  return userWord;
};
