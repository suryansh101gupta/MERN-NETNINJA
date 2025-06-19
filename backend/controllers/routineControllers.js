
const Routine = require('../models/routineSchema')
const mongoose = require('mongoose')


// get all routine
const getRoutines = async(req, res) => {
    const user_id = req.user._id
    const routines = await Routine.find({ user_id }).sort({createdAt: -1})

    res.status(200).json(routines)
}

// get one routine
const getRoutine = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg: 'no such routine'})
    }

    const routine = await Routine.findById(id)

    if(!routine){
        return res.status(404).json({mssg: 'no such routine'})
    }

    res.status(200).json(routine)
}

// create routine
const createRoutine = async(req,res) => {
    const { title, product, time} = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!product){
        emptyFields.push('product')
    }
    // if(!time){
    //     emptyFields.push('Time')
    // }

    if(emptyFields.length>0){
        return res.status(400).json({error: ' Please fill the empty fields', emptyFields})
    }

    // add doc to db
    try{
        const user_id = req.user._id
        const routine = await Routine.create({title, product, time, user_id})
        res.status(200).json(routine)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete routine
const deleteRoutine = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg: 'no such routine'})
    }

    const routine = await Routine.findOneAndDelete({_id: id})

    if(!routine){
        return res.status(404).json({mssg: 'no such routine'})
    }

    res.status(200).json(routine)
}

// update
const updateRoutine = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg: 'no such routine'})
    }

    const routine = await Routine.findOneAndUpdate({_id: id}, {...req.body})

    if(!routine){
        return res.status(404).json({mssg: 'no such routine'})
    }

    res.status(200).json(routine)
}


module.exports = {
    getRoutines,
    getRoutine,
    createRoutine,
    deleteRoutine,
    updateRoutine
}