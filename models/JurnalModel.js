import mongoose from "mongoose";


const JurnalSchema = mongoose.Schema({
    name:{type:String, required:true},
    publishedDate:{type:String, required:true },
    author:{type:String, required:true},
    inStock:{type:Boolean, required:true}
},{timestamps:true})

const JurnalItem = mongoose.model('Jurnal',JurnalSchema)

export default JurnalItem