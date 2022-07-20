const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
    title : {
        type: String,
        required : [true, 'Please Enter the Title']
    },
    description : {
        type : String
    },
    dueTime : {
        type : Date
    },
    user : {
        type : mongoose.Types.ObjectId
    }
})


module.exports = new mongoose.model("Todos", TodosSchema)