import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: { type: String, min: 5 },
    author: { type: String, min: 5, null: true },
});
export const Post = mongoose.model('nooos', PostSchema);
