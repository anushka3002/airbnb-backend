const AccountDetails = require("../models/accountDetails.model")

const getAccountDetails = async (req,res)=>{
    try {
        const accountDetails = await AccountDetails.find({});
        res.status(200).json(accountDetails)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const createAccountDetails = async (req,res)=>{
    try {
        const createAccountDetails = await AccountDetails.create(req.body);
        res.status(200).json(createAccountDetails)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAccountDetails,
    createAccountDetails
}
