const mongoose = require('mongoose');

const AccountDetailsSchema = mongoose.Schema({
    bankName: {
        type: String,
        required: [true,'Bank name is required']
    },
    accountNumber: {
        type: Number,
        required: true
    },
    ifscCode: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
}
)

const AccountDetails = mongoose.model("AccountDetails", AccountDetailsSchema);

module.exports = AccountDetails;