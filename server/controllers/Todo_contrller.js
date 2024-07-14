const { text } = require('express')
const Todo_model = require('../models/Todo_model')

module.exports.getTodo  = async (req, res) => {
    const Todo  = await Todo_model.find()
    res.send(Todo)
}


module.exports.saveTodo = async (req, res) => {

    const {text} = req.body

    Todo_model
    .create({ text })
    .then((data) => {
        console.log("Todo Added Successfully....");
        console.log(data);
        res.send(data)
    }) 
}


module.exports.updateTodo = async (res, ree) = {
    const {_id, text} = req.body
    Todo_model
    .findByIdAndUpdate(_id, {text})
    .then(() => res.send("Update Succefully...."))
    .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (res, ree) = {
    const {_id} = req.body
    Todo_model
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Succefully...."))
    .catch((err) => console.log(err))
}