const mongoose = require('mongoose');

const PreferencesSchema = mongoose.Schema({
    notifications: {
        type: String,
        required: [true,'Bank name is required']
    },
    theme: {
        type: String,
        required: false
    },
    language: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
}
)

const Preferences = mongoose.model("Preferences", PreferencesSchema);

module.exports = Preferences;