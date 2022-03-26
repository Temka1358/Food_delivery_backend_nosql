const { body, validationResult } = require("express-validator");

const createfood = () => {
    return [
      body("name").notEmpty().withMessage("name is empty"),
      body("price").notEmpty().withMessage("price is empty"),
      body("discount")
        .isNumeric()
        .isLength({ min: 0, max: 100 })
        .withMessage("discount is empty or numeric"),
      body("stock")
        .notEmpty()
        .isLength({ min: 1 })
        .withMessage("stock is empty numeric min 1"),
      body("category").notEmpty().withMessage("category.name is empty"),
    ];
  };

  exports.createfood = createfood