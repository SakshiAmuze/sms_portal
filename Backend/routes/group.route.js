import express from "express";
import { addgroup, showgroup, updategroup, deletegroup } from "../controllers/group.controller.js";

const groupRouter = express.Router();

groupRouter
    .post('/add-grp', addgroup)
    .get('/show-grp', showgroup)
    .put('/update-grp/:grpid', updategroup)
    .delete('/delete-grp/:grpid', deletegroup)
    

export default groupRouter;
