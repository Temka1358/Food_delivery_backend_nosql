const express = require('express')
const Food = require('../models/Food');
const {body, validationResult}  = require("express-validator");
const e = require('express');


const foodAll = (req, res)=> {
    Food.findAll()
        .then(data=> res.json({data:data}))
        .catch((err) => res.json({data:err}))
}

const addFood = (req,res)=>{
    console.log("controller running")
    console.log(req)
    const errors = validationResult(req);
    console.log("after validatation in controller")
    if(!errors.isEmpty()){
        return res.status(400).json({success: false, errors: errors.array()})
    }else{
        Food.create(req.body)
        .then(result=> res.json({success: true, data: result}))
        .catch((err) => res.json({data:err}))
    }
}

const updateFoodPrice = (req,res) =>{
    Food.update(req.body, {where: {id: req.params.id}})
    .then(data=> res.json({success: true, data: `Food with id=${req.params.id}, price updated to ${req.body.price}`}))
    .catch(err=> res.json({succes: false, data: `Error: ${err}`}));
}

const deleteFood = (req,res) =>{
    Food.destroy({where: {
        id: req.params.id
    }})
        .then(data=>res.json({success: true, data: "Food deleted"}))
        .catch(err=> res.json({success: false, data: "Cn not delete", error: err}))
}

    module.exports =  {foodAll, updateFoodPrice, deleteFood, addFood};