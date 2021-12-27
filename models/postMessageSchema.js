import mongoose from 'mongoose';

var PostMessage = mongoose.model('PostMessage',
{
    author: String,
    title : String,
    message:  String,
    date: { type: Date, default: Date.now },
},'postMessages')

export default PostMessage;

