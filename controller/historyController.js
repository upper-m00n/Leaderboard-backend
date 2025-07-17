const History = require('../models/History')

const getUserHistory= async(req,res)=>{
    try {
        const history = await History.find()
        .sort({timestamp:-1})
        .populate('userId','name');

        const formatted = history.map((entry)=>({
            id:entry._id,
            user:entry.userId.name,
            pointsClaimed:entry.pointsClaimed,
            timestamp:entry.timestamp
        }))
        res.status(200).json(formatted);

    } catch (error) {
        console.error('History fetch error:', err);
        res.status(500).json({ message: 'Server error while fetching history.' });
    }
}

module.exports= {getUserHistory}