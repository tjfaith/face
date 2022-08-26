// Lists out all of the faces you have enrolled in a gallery.

const Kairos = require('kairos-api');
const client = new Kairos('444b2604','54f271c863c961229940d707a218fc3f');

const params = {
    gallery_name: 'gallerytest1',
};


client.galleryRemove(params)
.then(function(result) {
    console.log(JSON.stringify(result, null, ' '));
}
).catch(function(err) { console.log(err);});