const cloudinary = require("../middleware/cloudinary");
const Pet = require("../models/Pet");
const User = require("../models/User");
const Favorite = require("../models/Favorite");

module.exports = {
  getProfile: async (req, res) => { 
    console.log(req.user)
    try {
      //Since we have a session each request (req) contains the logged-in users info: req.user
      //console.log(req.user) to see everything
      //Grabbing just the posts of the logged-in user
      const pets = await Pet.find({});
      //const user = await User.find({});
      //Sending post data from mongodb and user data to ejs template
      res.json( {pets });
    } catch (err) {
      console.log(err);
    }
  },
  getFavorites: async (req, res) => { 
    console.log(req.user)
    try {
      //Since we have a session each request (req) contains the logged-in users info: req.user
      //console.log(req.user) to see everything
      //Grabbing just the posts of the logged-in user
      const pets = await Favorite.find({ }).populate('pet'); //with out populate('pet') it only returns 3 objects from "Favorite collection" - you will need this to grab cloudinary url

      console.log(pets)

      //Sending post data from mongodb and user data to ejs template
      res.json({ pets });
    } catch (err) {
      console.log(err);
    }
  },
  getPet: async (req, res) => {
    try {
      //id parameter comes from the post routes
      //router.get("/:id", ensureAuth, postsController.getPost);
      //http://localhost:2121/post/631a7f59a3e56acfc7da286f
      //id === 631a7f59a3e56acfc7da286f
      const pet = await Pet.findById(req.params.id);
      res.json({pet});
    } catch (err) {
      console.log(err);
    }
  },
  createPet: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      let newPet = new Pet({
        name: req.body.name,
        petType: req.body.petType,
        breed: req.body.breed,
        gender: req.body.gender,
        vaccinated: req.body.vaccinated,
        name: req.body.name,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        costAdoption: req.body.costAdoption,
        costSponsor: req.body.costSponsor,
        neutered: req.body.neutered,
        location: req.body.location,
        likes: 0,
        user: req.user.id,
      });
      newPet.save((err) => {
        if(err) {
          res.send({
            success: false,
            msg: "failed to Save",
          });
          console.log(err);
        } else {
          res.send({
            success: true,
            msg: "Pet has been created",
          })
        }
        })

      //media is stored on cloudinary - the above request responds with url to media and the media id that you will need when deleting content 
      // await Pet.create({
        
      // });
      console.log("Pet has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  favoritePet: async (req, res) => {
    try {
      //media is stored on cloudainary - the above request responds with url to media and the media id that you will need when deleting content 
      await Favorite.create({
        user: req.user.id,
        pet: req.params.id,
      });
      console.log("Favorite has been added!");
      res.redirect(`/pet/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  likePet: async (req, res) => {
    try {
      await Pet.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/pet/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePet: async (req, res) => {
    try {
      // Find post by id
      let pet = await Pet.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(pet.cloudinaryId);
      // Delete post from db
      await Pet.remove({ _id: req.params.id });
      console.log("Deleted Pet");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },

  getFeed: async (req, res) => {
    try {
      const pets = await Pet.find().sort({ createdAt: "desc" }).lean();
      res.json({pets});
    } catch (err) {
      console.log(err);
    }
  },

  getDonate: async (req, res) => {
    try {
      const pets = await Pet.find({});
      res.json(pets);
    } catch (err) {
      console.log(err);
    }
  },

  getContact: async (req, res) => {
    try {
      const pets = await Pet.find({});
      res.json({pets});
    } catch (err) {
      console.log(err);
    }
  }
};

