
const express = require("express");
const router = new express.Router();
const FoodController = require("../controller/FoodController")
const FoodValidator = require('../middleware/create_update')

const Food = require('../models/Food');
const Category = require('../models/Category');
const { route } = require("express/lib/application");


router.get('/category', (req,res)=>{
    Category.findAll()
    .then(data=> res.json({data:data}))
    .catch((err) => res.json({data:err}))
})

// Food CRUD
// get all foods
router.get('/foods', FoodController.foodAll)
//Create Food
router.post('/createFood',FoodValidator.createfood(), FoodController.addFood)
//Update food (change price)
router.post('/updatePrice/:id', FoodController.updateFoodPrice)
// delete food by id
router.post('/deleteFood/:id', FoodController.deleteFood)



module.exports = router;