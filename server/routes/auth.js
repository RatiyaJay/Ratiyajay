const express = require("express")
const router = express.Router()
const cors = require("cors")
const loginUser = require("../controllers/userController");

router.post("/", loginUser);
router.get("/",(req,res) => {
	res.send("nfgdhgfd");
})