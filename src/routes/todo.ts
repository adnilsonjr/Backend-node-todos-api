import {Router} from 'express';
import { TodoController } from '../controller/todo';

const routerTodo = Router();

const todoController = new TodoController();

routerTodo.get('/', (req, res) => todoController.getAllTodos(req, res));
routerTodo.post('/', (req, res) => todoController.createTodo(req, res));
routerTodo.put('/:id', (req, res) => todoController.updateTodo(req, res));
routerTodo.delete('/:id', (req, res) => todoController.deleteTodo(req, res));  
routerTodo.get('/:id', (req, res) => todoController.getTodoById(req, res));

export default routerTodo;
