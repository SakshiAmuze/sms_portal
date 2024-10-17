import express from "express";
import { addlibrary, showlibrary, deletelibrary, updatelibrary,showLibById } from "../controllers/library.controller.js";

const libraryRouter = express.Router();

libraryRouter
    .post('/add', addlibrary)
    .get('/show', showlibrary)
    .get('/showById/:libid',showLibById)
    .put('/update/:libid', updatelibrary)
    .delete('/delete/:libid', deletelibrary)
    

export default libraryRouter;