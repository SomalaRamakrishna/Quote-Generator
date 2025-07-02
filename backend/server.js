const express=require('express');
const app=express();
require('dotenv').config();
const mongoose=require('mongoose');
const axios=require('axios');

const PORT=process.env.PORT;
const CONNECTION_URI=process.env.CONNECTION_URI;

mongoose.connect(CONNECTION_URI,{}).then(()=>{
    console.log("DB connected Successfully");
}).catch((err)=>{
    console.error(" Error generating quote:", error.message || error);
    return res.status(500).send("An error occurred while generating the quote.");
});

app.use(express.json());
const cors=require('cors');

app.use(cors({origin:'*'}));

const generateQuoteRouter = require('./routes/generateQuotateRoute');
app.use('/api', generateQuoteRouter);



app.listen(PORT,()=>{
    console.log("server is running on port"+PORT);
})