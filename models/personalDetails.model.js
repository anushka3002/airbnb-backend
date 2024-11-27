const mongoose = require('mongoose');

const PersonalDetailsSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true,'First name is required']
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
}
)

const PersonalDetails = mongoose.model("PersonalDetails", PersonalDetailsSchema);

module.exports = PersonalDetails;