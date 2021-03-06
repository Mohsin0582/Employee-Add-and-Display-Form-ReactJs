const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/contactinformation", err => {
	if(!err)
		console.log("MongoDB Connection successful!");
	else{
		console.log("MongoDB Connection failed : " + JSON.stringify(err, undefined,2));
	}
});

module.exports.Contacts = require('./contact');