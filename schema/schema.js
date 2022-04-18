const mongoose=require('mongoose');
const { Schema }=mongoose;
const postSchema=new Schema({
    title:{type:String ,required:true},
    location:{type:String ,required:true},
    description:{type:String,required:true},
    PostImage:{type:String,required:true}
});


module.exports=mongoose.model("instaClonePost",postSchema);