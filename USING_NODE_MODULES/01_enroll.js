// Takes a photo, finds the faces within it, and stores the faces into a gallery you create.


const Kairos = require('kairos-api');
const client = new Kairos('444b2604','54f271c863c961229940d707a218fc3f');

const params = {
    image: 'http://media.kairos.com/kairos-elizabeth.jpg',
    subject_id: 'subtest1',
    gallery_name: 'gallerytest1',
    selector: 'SETPOSE'
  };

//   ENROLL IMAGE
  client.enroll(params)    
  .then(function(result) {
    console.log(JSON.stringify(result, null, ' '));
   }) 
  .catch(function(err) { console.log(err);});