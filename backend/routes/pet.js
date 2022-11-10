const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const petsController = require("../controllers/pet");
const { ensureAuth } = require("../middleware/auth");

//Post Routes
//Since linked from server js treat each path as:
//post/:id, post/createPost, post/likePost/:id, post/deletePost/:id
router.get("/:id", ensureAuth, petsController.getPet);

//Enables user to create post w/ cloudinary for media uploads
router.post("/createPet", upload.single("file"), petsController.createPet);

router.post("/favoritePet/:id", petsController.favoritePet);

//Enables user to like post. In controller, uses POST model to update likes by 1
router.put("/likePet/:id", petsController.likePet);

//Enables user to delete post. In controller, uses POST model to delete post from MongoDB collection
router.delete("/deletePet/:id", petsController.deletePet);

module.exports = router;
