const router = require("express").Router();
const { authenticationUser } = require("../../middleware/authenticationUser");
const {
  getAllTodos,
  createTodo,
  getOneTodo,
  updateTodo,
  deleteTodo,
} = require("./controller");

router.get("/", authenticationUser, getAllTodos);
router.post("/", authenticationUser, createTodo);
router.get("/:id", authenticationUser, getOneTodo);
router.put("/:id", authenticationUser, updateTodo);
router.delete("/:id", authenticationUser, deleteTodo);

module.exports = router;
