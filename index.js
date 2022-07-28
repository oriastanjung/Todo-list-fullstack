const express = require('express');
const app = express();
const dotenv = require("dotenv").config();


const port = process.env.PORT
const mongoose = require('mongoose');

//const bodyParser = require('body-parser')
const UsersRouter = require('./app/api/Users/router');
const TodosRouter = require('./app/api/Todos/router')
const cors = require('cors');

app.use(cors());
//app.use(bodyParser);
app.use(express.json());


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL_DEV);
}

app.get('/', (req,res) => {
    res.send('Hello World Test!')
})

const apiRoutes = '/api';

app.use(`${apiRoutes}/users`, UsersRouter );
app.use(`${apiRoutes}/todos`, TodosRouter );

app.listen (port, () => {
    console.log(`Example app listening on port ${port}`)
})


console.log("Database_URL:", process.env.MONGODB_URL_DEV);
