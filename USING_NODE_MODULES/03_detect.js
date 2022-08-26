// Takes a photo and returns the facial features it finds


const Kairos = require('kairos-api');
const client = new Kairos('444b2604','54f271c863c961229940d707a218fc3f');

// IMAGE WITH FACE
// const params = {
//     image: 'https://media.kairos.com/kairos-elizabeth.jpg',
//     subject_id: 'subtest1',
//     gallery_name: 'gallerytest1',
//     selector: 'SETPOSE'
//   };

// IMAGE WITHOUT FACE
const params = {
    image: 'https://cdn1.vectorstock.com/i/thumb-large/50/55/cartoon-group-photographers-or-people-vector-27535055.jpg',
    subject_id: 'subtest1',
    gallery_name: 'gallerytest1',
    selector: 'SETPOSE'
  };


  client.enroll(params)    
  .then(function(result) {
    console.log(JSON.stringify(result, null, ' '));
   }) 
  .catch(function(err) { console.log(err);});