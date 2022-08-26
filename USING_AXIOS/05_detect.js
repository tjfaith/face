// Takes a photo and returns the facial features it finds

const axios = require("axios");

// IMAGE WITH FACE
// const imageData = {
//   image: "https://media.kairos.com/kairos-elizabeth.jpg",
//   selector: "liveness",
// };

// IMAGE WITHOUT FACE
const imageData = {
  image: "https://cdn1.vectorstock.com/i/thumb-large/50/55/cartoon-group-photographers-or-people-vector-27535055.jpg",
  selector: "liveness",
};

axios
  .post("https://api.kairos.com/detect", imageData, {
    headers: {
      "Content-Type": "application/json",
      app_id: "444b2604",
      app_key: "54f271c863c961229940d707a218fc3f",
    },
  })
  .then(function (response) {
    console.log(JSON.stringify(response.data, null, " "));
  })
  .catch(function (err) {
    console.log(err);
  });
