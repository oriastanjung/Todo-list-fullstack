
const TodosModel = require('./model');
const {StatusCodes} = require('http-status-codes');

const getAllTodos = async (req,res,next) =>{
    try {
        const userId = req.user.id
        const result = await TodosModel.find({user : userId});

        if(!result) {
            throw new Error ('No Todos made from this UserId');
        }

        res.status(StatusCodes.OK).json({data : result})
    } catch (error) {
        next(error)
    }
}

const createTodo = async (req,res,next) => {
    try {
        const {
            title,
            description,
            dueTime
        } = req.body;

        const userWhoCreateTheTodo =  req.user.id

        const result = new TodosModel({
            title : title,
            description : description,
            dueTime : dueTime,
            user : userWhoCreateTheTodo
        });

        await result.save();
        res.status(StatusCodes.CREATED).json({data : result});

    } catch (error) {
        next(error)
    }
}

const getOneTodo = async (req,res,next) => {
    try {
        const {id : todoId} = req.params;
        const userWhoCreateTheTodo = req.user.id;

        const result = await TodosModel.findOne({_id : todoId, user : userWhoCreateTheTodo});

        if(!result){
            throw new Error ('No Todo found with the Id ' + todoId);
        }

        res.status(StatusCodes.ACCEPTED).json({data : result});
    } catch (error) {
        next(error)
    }
}

const updateTodo = async (req,res, next) => {
    try {
        const {id : todoId} = req.params;
        const {title, description, dueTime} = req.body;
        const userWhoCreateTheTodo = req.user.id;

        const result = await TodosModel.findOne({_id : todoId, user : userWhoCreateTheTodo});

        if(!result){
            throw new Error ('No Todo found with the Id ' + todoId);
        }

        result.title = title;
        result.description = description;
        result.dueTime = dueTime;

        await result.save()
        res.status(StatusCodes.ACCEPTED).json({data : result});

    } catch (error) {
        next(error)
    }
}

const deleteTodo = async (req, res, next) => {
    try {
        const {id : todoId} = req.params;
        const userWhoCreateTheTodo = req.user.id;

        const result = await TodosModel.findOne({_id : todoId, user : userWhoCreateTheTodo});

        if (!result) {
            throw new Error ('No Todo found with the Id ' + todoId);
        }
        
        await result.remove();
        res.status(StatusCodes.OK).json({data : result});

    } catch (error) {
        next(error)
    }
}
module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    getOneTodo,
    deleteTodo
}