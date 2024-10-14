import express from 'express';
import {chats} from './data/dummy.js'
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const app = express();

console.log(process.env.PORT);

app.get('/', (req,res) => {
    res.send("API runnn")
})

app.get('/api/chat/', (req, res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req, res) => {
    const id = req.params.id;
    res.send(chats.filter(chat => chat._id === id));
})

app.listen(PORT, console.log(`Server Started on port ${PORT}`));