import mongoose from "mongoose";

const { Schema } = mongoose

const groupSchema = new Schema({    
    grp_name: String
})

const groupModel = mongoose.model('Groups', groupSchema)
export default groupModel;