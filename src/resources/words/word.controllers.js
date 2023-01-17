import Word from './word.model.js';
import { readFile } from 'node:fs/promises';
const words = JSON.parse(await readFile(new URL('../../words/words.json', import.meta.url)));

export const getWords = async (ctx) => {
  /*   await Word.deleteMany();

  for (const user of users.users) {
    const u = new Word(user);
    await u.setPassword(user.password);
    await u.save();
  }
 */
  // ctx.body = users;

  /*  group: { type: Number, required: true },
  page: { type: Number, required: true },
  word: { type: String, required: true, max: 100 },
  image: { type: String, required: false, max: 150 },
  audio: { type: String, required: false, max: 150 },
  audioMeaning: { type: String, required: false, max: 150 },
  audioExample: { type: String, required: false, max: 150 },
  textMeaning: { type: String, required: false, max: 300 },
  textExample: { type: String, required: false, max: 300 },
  transcription: { type: String, required: false, max: 100 },
  wordTranslate: String,
  textMeaningTranslate: String,
  textExampleTranslate: String, */
  /*  const formatWords = words.map(
    ({
      group,
      page,
      word,
      image,
      audio,
      audioMeaning,
      audioExample,
      textMeaning,
      textExample,
      transcription,
      textExampleTranslate,
      textMeaningTranslate,
      wordTranslate,
    }) => ({
      group,
      page,
      word,
      image,
      audio,
      audioMeaning,
      audioExample,
      textMeaning,
      textExample,
      transcription,
      textExampleTranslate,
      textMeaningTranslate,
      wordTranslate,
    })
  );
  console.log(formatWords);
  for (const word of formatWords) {
    const w = new Word(word);
    await w.save();
  } */
  ctx.body = await Word.find({ page: 0, group: 0 });
};
