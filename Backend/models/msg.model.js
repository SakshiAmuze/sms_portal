import mongoose from "mongoose";

const { Schema } = mongoose

const messageSchema = new Schema({
    Message: String,
    lib_id: String
})

const messageModel = mongoose.model('messages', messageSchema)
export default messageModel;