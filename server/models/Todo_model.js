const { text } = require('express')
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    _id:{
            type: int,
            require: true
    },
    text:{
    
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Todo', todoSchema)