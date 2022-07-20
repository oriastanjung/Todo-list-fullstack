const router = require('express').Router();
const {authenticationUser} = require('../../middleware/authenticationUser')
const {getAllTodos, createTodo} = require('./controller');



router.get('/', authenticationUser, getAllTodos);
router.post('/', authenticationUser, createTodo);

module.exports = router