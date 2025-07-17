const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoute= require('./routes/userRoutes')
const claimRoute = require('./routes/claimRoutes')
const leaderboardRoute = require('./routes/leaderboardRoutes');
const historyRoute = require('./routes/historyRoutes')

require('dotenv').config();


const app = express();
const PORT= process.env.PORT || 5000;

//middleware
app.use(cors({
    origin: 'http://localhost:5173', // Your React app's URL
    methods: ['GET', 'POST','PUT'],
    credentials: true
}));
app.use(express.json())


// api routes
app.use('/api/users',userRoute);
app.use('/api/claim',claimRoute);
app.use('/api/leaderboard',leaderboardRoute)
app.use('/api/history',historyRoute)

app.use('/',(req,res)=>{
    console.log('api is wroking')
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB connected");
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })}
).catch((err)=>{
    console.error('MongoDb connection error',err);
})
