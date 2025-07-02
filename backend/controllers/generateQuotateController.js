const axios=require('axios');
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


const generateQuotate=(async(req,res)=>{
   const mood=req.query.mood;
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(`Give a single-line motivational quote for today ,if mood mention give according to that (mood is ${mood?mood:"not mentioned"})`);
        const response = await result.response;
        const text = response.text();
    
        console.log("Generated Quote:", text);
    
        return res.status(200).json(text );
      } catch (error) {
        console.error(error.message || error);
        return res.status(500).send("An error occurred while generating quote.");
      }
})
module.exports={generateQuotate};