var express = require("express");
const Todo = require("../models/Todo");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send({ status: "Api is working" });
});

// todo routes

router.get("/todo", async function (req, res, next) {

  try {
    const data = await Todo.find({});

    res.send({ status: true, message: "Todo list", data });

  } catch(error) {

    console.log(error)
    
    res.send({ status: false, message: "Error in data fetch", data: {} });

  }
});

router.post("/todo", async function (req, res, next) {

  try {

    const { name, isCompleted } = req.body;

    if(! name) {
      res.send({ status: false, message: "Name is required", data: {} });
    }

    const todo = {
      name: name,
      isCompleted: isCompleted ? isCompleted : false,
    }

    const data = await Todo.create(todo);

    res.send({ status: true, message: "Todo", data });

  } catch(error) {

    console.log(error)

    res.send({ status: false, message: "Error in data save", data: {} });
  }
});

router.post("/todo/toggle/:id", async function (req, res, next) {

  try {

    const { id } = req.params;

    const todo = await Todo.findById(id);

    if(! todo) {
      res.send({ status: false, message: "Todo not found", data: {} });
    }

    const data = await Todo.findByIdAndUpdate(todo.id, {
        isCompleted: !todo.isCompleted  
    }, { new: true})

    res.send({ status: true, message: "Todo", isCompleted: data.isCompleted });

  } catch(error) {

    console.log(error)

    res.send({ status: false, message: "Error in toggle data", data: {} });
  }
});

module.exports = router;
