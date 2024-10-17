import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';
import libraryRouter from './routes/library.route.js';
import dbconnection from './database/sms.database.js';
import groupRouter from './routes/group.route.js';
import contactRouter from './routes/contact.route.js';
import msgRouter from './routes/msg.route.js';

dbconnection().then(res => {
    console.log('DB connected successfully')
})
    .catch(err => {
        console.log('err'+err)
    })

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/library',libraryRouter);
app.use('/group',groupRouter);
app.use('/contact',contactRouter);
app.use('/msg',msgRouter);


app.listen(process.env.PORT,()=>{
    console.log("app listening on port " + process.env.PORT);
})