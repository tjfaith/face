// Lists out all of the galleries you have created.

const Kairos = require('kairos-api');
const client = new Kairos('444b2604','54f271c863c961229940d707a218fc3f');

  client.galleryListAll()    
  .then(function(result) {
    console.log(JSON.stringify(result, null, ' '));
   }) 
  .catch(function(err) { console.log(err);});