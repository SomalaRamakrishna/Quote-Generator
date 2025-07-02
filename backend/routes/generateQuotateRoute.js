const express=require('express');
const router=express.Router();
const { generateQuotate } = require("../controllers/generateQuotateController");


router.get('/generate-quotate',generateQuotate);

module.exports=router;