const PersonalDetails = require("../models/personalDetails.model")

const getPersonalDetails = async (req,res)=>{
    try {
        const personalDetails = await PersonalDetails.find({});
        res.status(200).json(personalDetails)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const createPersonalDetails = async (req,res)=>{
    try {
        const personalDetails = await PersonalDetails.create(req.body);
        res.status(200).json(personalDetails)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getPersonalDetails,
    createPersonalDetails
}
