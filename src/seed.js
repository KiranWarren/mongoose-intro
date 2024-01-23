// Import mongoose and DB connect
const mongoose = require("mongoose");
const { databaseConnect } = require("./database");

databaseConnect().then(async () => {
  console.log("Creating seed data!");

  // Create the pet entry
  const Pet = mongoose.model("Pet", {
    name: String,
    type: String,
    breed: String,
    gender: String,
    age: Number, //integer
    weightKg: Number, //float
    safeToPet: Boolean,
    photos: [String], // URL to some file storage like AWS S3, Google Cloud, Azure, Cloudinary, etc.
    favouriteToys: [String],
    favouritePlacesToSit: [String],
  });

  let newDog = new Pet({
    name: "Bongo",
    type: "Dog",
    breed: "Rottweiler",
    gender: "Male",
    age: 10, //integer
    weightKg: 42, //float
    safeToPet: false,
    photos: ["www.goooooogle.com", "www.yahooooo.com"], // URL to some file storage like AWS S3, Google Cloud, Azure, Cloudinary, etc.
    favouriteToys: ["bone", "squeaker"],
    favouritePlacesToSit: ["Under the tree", "front gate"],
  });

  await newDog.save().then(() => {
    console.log(`DB seeded with ${newDog.name} data!`);
  });
});
