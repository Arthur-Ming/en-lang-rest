import mongoose from 'mongoose';
import schemaOptions from '../../utils/schemaOptions.js';

const Schema = mongoose.Schema;

const userWordsSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Users',
    },

    words: [{ type: mongoose.Types.ObjectId, ref: 'Word' }],
  },
  schemaOptions()
);

const UserWords = mongoose.model('UserWords', userWordsSchema);

export default UserWords;
