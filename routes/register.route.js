const express = require("express");
const { getAccountDetails, createAccountDetails } = require("../controllers/accountDetails.controller");
const { getPersonalDetails, createPersonalDetails } = require("../controllers/personalDetails.controller");
const { getPreferences, createPreferences } = require("../controllers/perferences.controller");
const router = express.Router();

router.get('/account', getAccountDetails);
router.get("/personal", getPersonalDetails);
router.get("/preferences", getPreferences);
router.post("/account",createAccountDetails);
router.post("/personal",createPersonalDetails);
router.post("/preferences",createPreferences);

module.exports = router;