import TODO from "../models/toDoModel.js";
import mongoose from "mongoose"

export const createToDo = async (req, res) => {
    try {
        const {task , status} = req.body
        const todo = await TODO.create({
            task:task, 
            status:status
        })
        console.log(todo)
        res.status(200).json(todo)
    }catch(error){
        res.status(400).json({error: error})
    }

}
export const getAllToDos = async (req, res) => {
    try {
        const todos = await TODO.find()
        res.status(200).json(todos)
    }catch(error){
        res.status(400).json({error: error})
    }

}

export const deleteToDo = async (req, res) => {
    try {
        const {id}=req.params
        const todo = await TODO.findByIdAndDelete(id)
        if (!todo){
            return res.status(404).json({message: "Todo not found"})
        }
        res.status(200).json({msg:"deleted.."})
    }catch(error){
        res.status(400).json({error: error})
    }

}


export const editToDo = async (req, res) => {
    try {
        const {id}=req.params
        const {task}=req.body
        const todo = await TODO.findByIdAndUpdate(id,{task:task})

        if (!todo){
            return res.status(404).json({message: "Todo not found"})
        }
        const newTodo = await TODO.findById(id)
        res.status(200).json({msg:"task updated",newTodo})
    }catch(error){
        res.status(400).json({error: error})
    }

}