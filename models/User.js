const mongoose= require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String,
        required:true
    },
    totalPoints:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model('User',userSchema);