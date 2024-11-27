const Preferences = require("../models/preferences.model")

const getPreferences = async (req,res)=>{
    try {
        const preferences = await Preferences.find({});
        res.status(200).json(preferences)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const createPreferences = async (req,res)=>{
    try {
        const createPreferences = await Preferences.create(req.body);
        res.status(200).json(createPreferences)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getPreferences,
    createPreferences
}
