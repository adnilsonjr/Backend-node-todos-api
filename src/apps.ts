import Express from 'express';
import Cors from 'cors';
import routerTodo from './routes/todo.js';

const app = Express();

app.use(Express.json());
app.use(Cors());

// rotas
app.use('/api/todos', routerTodo);

// rotas check
app.get("/api/", (req, res) => {
    res.json({ message: "API todo list" });
});

export default app;


