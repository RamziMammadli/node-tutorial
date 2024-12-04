import mongoose from "mongoose";


const BookSchema = mongoose.Schema({
    name:{type:String, required:true},
    publishedDate:{type:String, required:true },
    author:{type:String, required:true},
    inStock:{type:Boolean, required:true}
},{timestamps:true})

const BookItem = mongoose.model('Book',BookSchema)

export default BookItem