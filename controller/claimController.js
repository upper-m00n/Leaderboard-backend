const History = require('../models/History');
const User = require('../models/User');


const claimPoints= async (req,res)=>{
    try {
        const {userId}= req.params;

        const user = await User.findById(userId)
        console.log("user from claim",user)
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const points = Math.floor(Math.random()*10)+1;
        user.totalPoints += points;
        
        await user.save();

        const historyEntry = new History({
            userId:user._id,
            pointsClaimed:points
        })

        await historyEntry.save();
        console.log("Points awarded:", points);
        res.status(200).json({
            message:"Points claimed successfully",
            user:{
                id:user._id,
                name:user.name,
                totalPoints:user.totalPoints
            },
            pointsAwarded:points
        })
    } catch (err) {
        console.error('Claim error:', err);
        res.status(500).json({ message: 'Server error while claiming points.' });
    }
}

module.exports={claimPoints};