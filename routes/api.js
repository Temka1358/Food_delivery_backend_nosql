
const express = require("express");
const router = new express.Router();
const FoodController = require('../controller/FoodController');
const Food = require("../models/Food");
const FoodValidator = require("../middleware/create_update")




// // Food CRUD
// // get all foods
router.get('/getFoods', FoodController.getFoods)
router.post('/createFood',FoodValidator.createfood(), FoodController.createFood)
router.post('/updateFood/:id', FoodController.updateFood)
router.get('/deleteFood/:id', FoodController.deleteFood)
//Create Food
// router.post('/createFood',FoodValidator.createfood(), FoodController.addFood)
// //Update food (change price)
// router.post('/updatePrice/:id', FoodController.updateFoodPrice)
// // delete food by id
// router.post('/deleteFood/:id', FoodController.deleteFood)



module.exports = router;