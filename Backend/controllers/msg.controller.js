import messageModel from "../models/msg.model.js"



const addmsg = async (req, res) => {
    // res.send({msg:'add message route called'})
    var { Message, lib_id } = req.body

    const datatoinsert = {
        Message: Message,
        lib_id: lib_id
    }

    try {
        var message_instance = new messageModel(datatoinsert)
        var after_insert = await message_instance.save()
        res.status(200).send({ msg: 'data inserted', data: after_insert })
    }
    catch (err) {
        res.status(403).send({ msg: 'err', data: err })
    }

}

const showmsg = async (req, res) => {
    // res.send({ msg: 'show message route called' })

    try {
        var showdata = await messageModel.find()
        res.status(200).send({ msg: 'All Records', data: showdata })
    }
    catch (err) {
        res.status(403).send({ msg: 'err', data: err })
    }
}

const show_message_by_id = async (req,res)=>{
    var librayId = req.params.libid;

    try {
        var showdata = await messageModel.find({lib_id: librayId})
        res.status(200).send({ msg: 'All Records', data: showdata })
    }
    catch (err) {
        res.status(403).send({ msg: 'err', data: err })
    }
}

export {
    addmsg,
    showmsg,
    show_message_by_id
}