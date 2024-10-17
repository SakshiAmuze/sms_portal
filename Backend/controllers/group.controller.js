import groupModel from "../models/group.model.js";


const addgroup =  async (req,res) =>{

    // var {grp_name} = req.body;
    // var dataToInsert = {grp_name};

    // try{

    //     var library_instance = new groupModel(dataToInsert)
    //     var after_insert = await library_instance.save()
    //     res.status(200).send({ msg: 'Data inserted', data: after_insert })
    // }
    // catch(err){

    //     res.status(403).send({ msg: 'err', data: err })
    //     console.log(err);
    // }
}
const showgroup = async (req,res) =>{
    // try {
    //     var show_grp = await groupModel.find()
    //     res.status(200).send({ msg: 'All Records', data: show_grp })
    // }

    // catch {
    //     res.status(403).send({ msg: 'err', data: err })
    // }

}
const deletegroup = async (req,res) =>{

    // try {
    //     var delete_data = await groupModel.findByIdAndDelete(req.params.grpid)
    //     res.send({ status: 200, msg: 'Data deleted', data: delete_data })
    // }
    // catch {
    //     res.status(403).send({ msg: 'err', data: err })
    // }
}
const updategroup = async (req,res) =>{
    // try {
    //     var update_grp = await groupModel.findByIdAndUpdate(req.params.grpid, req.body)
    //     res.status(200).send({  msg: 'Data Updated', data: update_grp })
    // }
    // catch {
    //     res.status(403).send({ msg: 'err', data: err })
    // }

}


export {
    addgroup,showgroup,deletegroup,updategroup
}