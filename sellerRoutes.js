const express = require("express");
const {registerSeller,loginSeller}=require("../controllers/sellerController")

const router = express.Router();

// Register user
router.post("/registerSeller", registerSeller);

// Login user
router.post("/loginSeller",loginSeller);



module.exports = router;
