// Takes two photo, finds the largest face in source image and compares it with faces of target image.

const axios = require("axios");

const imageData = {
    source: "https://media.kairos.com/kairos-elizabeth.jpg",
    target: "https://media.kairos.com/kairos-elizabeth.jpg",
    selector:"liveness"
    };

axios
.post("https://api.kairos.com/compare", imageData, {
      headers: {
        "Content-Type": "application/json",
        app_id: "444b2604",
        app_key: "54f271c863c961229940d707a218fc3f",
      }
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data, null, ' '));
    })
    .catch(function (err) {
      console.log(err);
    });
  