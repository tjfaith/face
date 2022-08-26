// Lists out all of the galleries you have created.


const axios = require("axios");


axios
  .post("https://api.kairos.com/gallery/list_all", {}, {
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


