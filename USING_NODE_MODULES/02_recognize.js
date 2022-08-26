// Takes a photo, finds the faces within it, and tries to match them against the faces you have already enrolled into a gallery.

const Kairos = require('kairos-api');
const client = new Kairos('444b2604','54f271c863c961229940d707a218fc3f');

// ENROLLED IMAGE
// const params = {
//     image: 'http://media.kairos.com/kairos-elizabeth.jpg',
//     subject_id: 'subtest1',
//     gallery_name: 'gallerytest1',
//     selector: 'SETPOSE'
//   };

// UNENROLLED IMAGE
const params = {
    image: 'http://silvercreekart.weebly.com/uploads/3/7/3/0/37300503/9876268_orig.jpeg',
    subject_id: 'subtest1',
    gallery_name: 'gallerytest1',
    selector: 'SETPOSE'
  };


  client.recognize(params)    
  .then(function(result) {
    console.log(JSON.stringify(result, null, ' '));
   }) 
  .catch(function(err) { console.log(err);});