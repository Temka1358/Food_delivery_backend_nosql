const express = require("express")
const Food = require('../models/Food')
const {body, validationResult} = require("express-validator")

const getFoods = async(req, res, nex)=>{
    Food.find({}, function(err, data){
        if (err) res.json({success: false, data: err})
        else res.json({success: true, data: data})
    })
}

const createFood = (req, res) =>{
    const error = validationResult(req)
    console.log(error)
    if (error.isEmpty()){
        Food.create(req.body, function(err, data){
            if (err) res.json({success: false, data: err})
            else res.json({screen: true, data: data})
        })
    }
    else{
        return res.status(400).json({success: false, errors: errors.array()})
    }
};

const updateFood = (req, res) =>{
    Food.updateOne({_id: req.params.id}, req.body, function(err, data){
        if (err) res.json({success: false, data: err})
        else res.json({succes: true, data: data})
    })
}
const deleteFood = (req, res) =>{
    Food.findOneAndDelete({_id: req.params.id}, function(err, data){
        if (err) res.json({success: false, data: err})
        else res.json({succes: true, data: data})
    })
}

module.exports = {
    getFoods,
    createFood,
    updateFood,
    deleteFood
}