// Takes a photo, finds the faces within it, and stores the faces into a gallery you create.

const axios = require("axios");

const imageData = { 
    image: "https://media.kairos.com/kairos-elizabeth.jpg",
    subject_id: "Elizabeth",
    gallery_name: "MyGallery",
    selector:"liveness"
  };


axios
  .post("https://api.kairos.com/enroll", imageData, {
    headers: {
      "Content-Type": "application/json",
      app_id: "444b2604",
      app_key: "54f271c863c961229940d707a218fc3f",
    },
  })
  .then(function (response) {
    console.log(JSON.stringify(response.data, null, ' '));
  })
  .catch(function (err) {
    console.log(err);
  });
