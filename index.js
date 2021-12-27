import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postMessageRoutes from './controllers/postMessageController.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/postsMessages', postMessageRoutes);

app.get('/',(req , res)=>{
  res.send('Hello to post center');
});

//const CONNECTION_URL = '<database url>';
const PORT = process.env.PORT|| 3001;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log('Server Running on Port:',{PORT})))
  .catch((error) => console.log({error},' did not connect'));
