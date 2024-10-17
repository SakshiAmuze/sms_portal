import express from "express";
import {
    addcontact,
    showcontact,
    updatecontact,
    deletecontact,showcontactById
} from '../controllers/contact.controller.js';

const contactRouter = express.Router()

contactRouter
    .post('/add-contact', addcontact)
    .get('/show-contact', showcontact)
    .get('/show-contact-By-Id/:grpid', showcontactById)
    .put('/update-contact/:contactid', updatecontact)
    .delete('/delete-contact/:contactid', deletecontact)

export default contactRouter; 