import {Schema, model, Types} from 'mongoose'

const photoSchema = new Schema({
    url: {type: String, required: true},
    namePhoto: {type: String, required: true},
    user_id: {type: Types.ObjectId, required: true, ref: 'User'},
    Comments: {type: Array, required: true},
    Likes: {type: Array, required: true},
})


export default model('Photo', photoSchema)