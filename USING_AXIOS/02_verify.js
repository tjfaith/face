// Takes a photo, finds the face within it, and tries to compare it against a face you have already enrolled into a gallery.

// =========NOTE=======================
// You should use the "confidence" value to determine whether the comparison is valid for your application. We find that confidence values in excess of 60% are almost always of the same person.


const axios = require("axios");

// ENROLLED IMAGE
const imageData = { 
    image: "https://media.kairos.com/kairos-elizabeth.jpg",
    subject_id: "Elizabeth",
    gallery_name: "MyGallery",
    selector:"liveness"
  };

// UNENROLLED IMAGE
// const imageData = { 
//     image: "http://silvercreekart.weebly.com/uploads/3/7/3/0/37300503/9876268_orig.jpeg",
//     subject_id: "Elizabeth",
//     gallery_name: "MyGallery",
//     selector:"liveness"
//   };


axios
  .post("https://api.kairos.com/verify", imageData, {
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



