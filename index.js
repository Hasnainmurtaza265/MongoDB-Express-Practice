const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
require('dotenv').config();
const PORT = process.env.PORT;
const server = async()=>{
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected Successfully');
    
} catch (error) {
    console.log(error);
    
}


}

server();
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);

})