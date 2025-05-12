const express = require("express");
const {
  createLand,
   getAllLands,
   getLandById,
   updateLand
   
  // deleteLand,
} = require("../controllers/landController"); // importing from landController
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

// Create Land

router.post("/createLand",authenticateUser, createLand);
 // Get All Lands
 router.get("/all", authenticateUser,getAllLands);
 router.get("/getLandById/:id",getLandById);

// Update Land
 router.put("/update/:id",authenticateUser,updateLand);

// // Delete Land
// router.delete("/delete/:id", deleteLand);

module.exports = router;