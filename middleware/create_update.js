
const {body, validationResult}  = require("express-validator");

const createfood = () =>{
    console.log('Middleware createfood is running')
    return [
        body('name')
            .not().isEmpty(),
        body("price")
            .not().isEmpty()
            .withMessage("Price is empty"),
        body("discount")
            .isNumeric()
            .isLength({min: 0, max:100}),
        body('stock')
            .not().isEmpty()
            .isLength({min: 0}),
        body('categoryId')
            .isNumeric()
    ];
}

exports.createfood = createfood;