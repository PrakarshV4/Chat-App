import express from 'express';
import {chats} from './data/dummy.js'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req,res) => {
    res.send("API runnn")
})

app.get('/api/chat/', (req, res) => {
    console.log(chats);
    res.send(chats);
})

app.get('/api/chat/:id', (req, res) => {
    const id = req.params.id;
    res.send(chats.filter(chat => chat._id === id));
})

app.listen(PORT, console.log(`Server Started on port ${PORT}`));