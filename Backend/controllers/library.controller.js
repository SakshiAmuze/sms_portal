import libraryModel from "../models/library.model.js";


const addlibrary =  async (req,res) =>{

    var {lib_name} = req.body;
    var dataToInsert = {lib_name};

    try{

        var library_instance = new libraryModel(dataToInsert)
        var after_insert = await library_instance.save()
        res.status(200).send({ msg: 'Data inserted', data: after_insert })
    }
    catch(err){

        res.status(403).send({ msg: 'err', data: err })
        // console.log(err);
    }
}
const showlibrary = async (req,res) =>{
    try {
        var show_lib = await libraryModel.find()
        res.status(200).send({ msg: 'All Records', data: show_lib })
    }

    catch(err) {
        res.status(403).send({ msg: 'err', data: err })
    }

}

const showLibById = async (req,res)=>{
    console.log(req.params.libid);
    try{
       var ansFORMDB = await libraryModel.findById(req.params.libid);
       res.status(200).send({msg:'Data Shown by id',data:ansFORMDB})
    }
    catch(err){
       res.status(403).send({error:err})
    }
 }


const deletelibrary = async (req,res) =>{

    try {
        var delete_data = await libraryModel.findByIdAndDelete(req.params.libid)
        res.send({ status: 200, msg: 'Data deleted', data: delete_data })
    }
    catch {
        res.status(403).send({ msg: 'err', data: err })
    }
}
const updatelibrary = async (req,res) =>{
    try {
        var update_lib = await libraryModel.findByIdAndUpdate(req.params.libid, req.body)
        res.status(200).send({  msg: 'Data Updated', data: update_lib })
    }
    catch {
        res.status(403).send({ msg: 'err', data: err })
    }

}


export {
    addlibrary,showlibrary,deletelibrary,updatelibrary,showLibById
}