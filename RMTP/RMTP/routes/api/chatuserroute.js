const express = require('express');
const { registerUser, authUser, allUser } = require("../../controllers/chatusercontroller");
const { protect } = require('../../middleware/authMiddleware');
const router = express.Router();

router.route("/chatuser/register").post(registerUser)
router.route("/chatuser/login").post(authUser);
router.route("/chatuser/allusers").get(protect, allUser);


module.exports = router;