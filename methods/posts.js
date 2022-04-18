const Post=require('../schema/schema');

const newPost=async(req,res)=>{
    try{
    const posts = await Post.create({
        title:req.body.title,
        location:req.body.location,
        description:req.body.description,
        PostImage:req.body.PostImage,
    });
    return res.status(200).json({status:"new post posted succesfully",posts})
    }catch(err){
         return res.status(500).json({err:"server error",err})
    }
}


const fetchPost=async(req,res)=>{
    try{
        const posts=await Post.find();
        return res.status(200).json({status:"fetching done successfully",posts})

    }catch(err){
        return res.status(500).json({err:"server error while fetching"})
    }
}


const update = async(req,res)=>{
    try{
        const posts=await Post.updateOne({_id:req.params.id},{description:req.body.description});
         if(posts.modifiedCount > 0){
         return res.status(200).json({success:"post updated successfully",posts})
        }else{
            return res.status(401).json({success:"error"})
         }

    }catch(err){
        return res.status(500).json({err:"server error at updating"})
    }
}


const del =async(req,res)=>{
    try{
        const posts=await Post.deleteOne({_id:req.params.id})
        console.log(posts)
         if(posts.deletedCount > 0){
            return res.status(200).json({success:"post deleted successfully",posts})
         }else{
            return res.status(401).json({success:"fail"})
         }

    }catch(err){
        return res.status(500).json({err:"server error while deleting"})
    }
}

module.exports={newPost,fetchPost,update,del};