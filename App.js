const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser')
const UsersRouter = require('./app/api/Users/router');
const cors = require('cors');

app.use(cors());
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL_DEV);
}

app.get('/', (req,res) => {
    res.send('Hello World Test!')
})

const apiRoutes = '/api';
// app.use(bodyParser);
app.use(express.json());


app.use(`${apiRoutes}/users`, UsersRouter );

app.listen (port, () => {
    console.log(`Example app listening on port ${port}`)
})