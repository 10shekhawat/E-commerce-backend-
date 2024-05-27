const express = require("express");
const {newController}= require('../controllers/newController')
const router = express.Router()

router.get('/',newController)


module.exports= router