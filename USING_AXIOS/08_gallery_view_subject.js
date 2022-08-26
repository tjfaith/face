// Displays all face_id's and enrollment timestamps for each template you have enrolled from a given gallery_name and subject_id.

const axios = require("axios");

const imageData = {
    "gallery_name":"MyGallery",
    "subject_id":"Elizabeth"
}

axios.post('https://api.kairos.com/gallery/view_subject',imageData, {
    headers: {
        "Content-Type": "application/json",
        app_id: "444b2604",
        app_key: "54f271c863c961229940d707a218fc3f",
    }
}).then(function (response) {
    console.log(JSON.stringify(response.data, null, " "));
})
.catch(function (err) {
    console.log(err);
}
);