import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  originalUrl:{
    type:String,
    required:true
  },
  shortUrl:{
    type:String,
    required:true,
    unique:true
  },
  expiresAt:{
    type:Date,
    required:true
  }
},{
  timestamps:true
})

urlSchema.index({expiresAt:1},{expireAfterSeconds:0});

const Url = mongoose.model('url',urlSchema);

export default Url;