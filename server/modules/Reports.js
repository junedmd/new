import { Schema, model } from 'mongoose';
const reportSchema =  new Schema({
    liscenseplate:{
        type:String,
        
    },
    make:{
        type:String
    },
    vin:{
        type:String,
       
    },
    model:{
        type:String,
       
    },
    type:{
        type:String,
    },
    date:{
        type:Date
    },
    milesdriven:{
        type:Number
    }
   

}, {
    timestamps:true,
});

const Report = model('product',reportSchema);

export default Report;