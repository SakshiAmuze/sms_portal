import mongoose from "mongoose";

const {Schema } = mongoose;


const librarySchema = new Schema({    
    lib_name: String
})

const libraryModel = mongoose.model('libraries', librarySchema)
export default libraryModel;