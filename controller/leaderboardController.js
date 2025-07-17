const User = require('../models/User')


const getLeaderBoard= async(req,res)=>{
    try {
        const users = await User.find().sort({totalPoints:-1})

        // assigining ranks
        const leaderboard = users.map((user,index)=>(
            {
                rank: index +1,
                _id:user._id,
                name: user.name,
                totalPoints:user.totalPoints
            }
        ))

        res.status(200).json(leaderboard);

    } catch (error) {
        console.error('Leaderboard fetch error:', error);
        res.status(500).json({ message: 'Server error while fetching leaderboard.' });
    }
}

module.exports = {getLeaderBoard}