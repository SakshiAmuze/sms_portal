import mongoose from "mongoose";

const { Schema } = mongoose

const contactSchema = new Schema({
    username: String,
    usermobile: Number,
    useremail: String,
    group_id:String
})

const contactModel = mongoose.model('contacts',contactSchema)
export default contactModel;