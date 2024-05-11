const mongoose = require('mongoose'); 
 const URI = 'mongodb://root:example@127.0.0.1:27017/sena?authSource=admin'; 
 mongoose.connect(URI,{ useNewUrlParser: true , useUnifiedTopology: true })
     .then(db => console.log('DB is connected'))
     .catch(err => console.error(err));  
 module.exports = mongoose; 