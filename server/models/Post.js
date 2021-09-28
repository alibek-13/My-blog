import { Schema, model, Types } from "mongoose";

const postSchema = new Schema({
    body: {type: String, required: true},
    created_at: {type: Number, required: true},
    author: {type: Types.ObjectId, required: true, ref: 'User'},
    Comments: {type: Array, required: true},
    Likes: {type: Array, required: true},
})