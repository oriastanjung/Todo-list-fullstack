# Documentation for Backend
## Signup and Signin
- GetAllUser() endpoint = {apiUrl}/users/   (methodGet)
- SignUp() endpoint = {apiUrl}/users/signup/   (methodPost)   (req.body using JSON => email, password, username, no_telp)
- SignIn() endpoint = {apiUrl}/users/signin/   (methodPost)   (req.body using JSON => password, username)

## CRUD Todo
### Need To Login and get the token first to use the method on Todo. Dont forget use a Bearer Token
- GetAllTodos() endpoint = {apiUrl}/todos/ (methodGet)
- GetOneTodo() endpoint = {apiUrl}/todos/:id  (methodGet)
- UpdateOneTodo() endpoint = {apiUrl}/todos/:id  (methodPut)
- DeleteTodo() endpoint = {apiUrl}/todos/:id   (methodDelete)
- CreateTodo() enpoint = {apiUrl}/todos/    (methodPost)    (req.body using JSON => title, description, dueTime)

