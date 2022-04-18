const express=require('express'); 
const cors=require('cors')
const app=express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://Nikhil:Nikhil@cluster0.stavd.mongodb.net/Insta?retryWrites=true&w=majority')
.then(()=>console.log('mongodb connected'))

app.use(require('./routes'));
app.listen(PORT,()=>console.log('server is running at port 5000....'));