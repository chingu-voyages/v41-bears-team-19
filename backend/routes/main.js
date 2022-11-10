const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const petsController = require("../controllers/pet");
const { ensureAuth } = require("../middleware/auth");

//Main Routes 
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, petsController.getProfile);
router.get("/favorites", ensureAuth, petsController.getFavorites);
router.get("/feed", ensureAuth, petsController.getFeed);
router.get("/donate", ensureAuth, petsController.getDonate);
router.get("/contact", ensureAuth, petsController.getContact);

//Routes for user login/signup
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
