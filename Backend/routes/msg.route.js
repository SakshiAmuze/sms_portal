import express from "express";
import { addmsg, showmsg, show_message_by_id} from "../controllers/msg.controller.js";

const msgRouter = express.Router();

msgRouter
    .post('/add-msg', addmsg)
    .get('/show-msg', showmsg)
    .get('/showById/:libid', show_message_by_id)

    

export default msgRouter;