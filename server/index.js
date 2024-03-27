import express from 'express';
import mongoose from 'mongoose';
import Report from './modules/Reports.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) {
      console.log("api is working")
    }
  } catch (e) {
    console.log(e)
  }

};
connectMongoDB();


// adding reports 

app.post('/reports', async (req, res) => {

  try {
    const { liscenseplate, make, vin, model, type, date, milesdriven } = req.body;

    const newReport = new Report({
      liscenseplate: liscenseplate,
      make: make,
      vin: vin,
      model: model,
      type: type,
      date: date,
      milesdriven: milesdriven

    });

    app.get('/reports',async(req,res)=>{

      try{
       const totalReports = await Report.find();
  
      res.send({
          success:true,
          data:totalReports,
          message:"total data is fetched"
      })
      }catch(e){
          res.send({
              success:true,
              message:e.message
          })
      }
      
  
  })
  app.get('/aam',async(req,res)=>{
      res.return({
        success:true,
        message:"juned hi"
      }
      )
  })

    const savedReport = await newReport.save();

    res.send({
      success: true,
      data: savedReport,
      message: "report aaded successfully"
    })
  } catch (e) {
    res.send({
      success: false,
      message: e.message
    })
  }


})

app.listen(5000, () => {
  console.log("listening on port 5000");
})