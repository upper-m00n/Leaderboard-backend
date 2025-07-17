const express = require('express')
const User = require('../models/User')

const getUsers= async (req,res)=>{
    try {
        const users = await User.find().sort({name:1});
        res.status(200).json(users)
    } catch (error) {
        console.log('Cannot fetch users',error);
        res.status(500).json({message:"cannot fetch users"})
    }
}

const addUser = async(req,res)=>{
    try {
        const {name} = req.body;
        if(!name){
            return res.status(400).json({message:"Name is required"});
        }

        const newUser=new User({name});
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.error("cannot create new user",error)
        res.status(500).json({message:"cannot create new user"})
    }
}

module.exports ={getUsers, addUser}