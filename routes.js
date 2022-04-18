const express = require('express');
const Router =express.Router();
const {newPost,fetchPost,update,del}=require('./methods/posts');

Router.get('/post',fetchPost);
Router.post('/post',newPost);
Router.put('/post/:id',update);
Router.delete('/post/:id',del);


module.exports=Router;