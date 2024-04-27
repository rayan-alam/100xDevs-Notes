const express = require("express");
const {createTodo, updateTodo} = require("./types");
const {todo} = require("./db");
const app = express();
const cors = require("cors");
app.use(express.json());
// cors allow certain urls to access the backend
app.use(cors({
    origin: "http://localhost:5173"
}));

// creating a todo route
app.post("/todos", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Input sent, are wrong!"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });
    res.json({
        msg: "Todo Created"
    });
});

app.get("/todos",async (req, res) => {
    const todos = await todo.find({});
    console.log(todos);
    res.json({
        todos: []
    });
});

// update a todo after completion of task
app.put("/completed",async (req, res) => {
    const updatePayload = req.body; 
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Update inputs are wrong!"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "TODO marked as completed"
    });
})

app.listen(3000, ()=> {
    console.log("Server live on port 3000");
});