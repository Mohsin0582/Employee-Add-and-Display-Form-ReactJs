const db=require('../models');

exports.getContacts = async (req, res, next) => {
    try {
      const contacts = await db.Contacts.find();
      return res.status(200).json(contacts);	
    } catch (err) {

      return next({
        status: 400,
        message: err.message,
      });
    }

  };

  exports.clickedContact = async (req, res, next) => {
    const {id:clickedId } = req.params;
    try {
      const clickedContact = await db.Contacts.findById(clickedId);
      return res.status(200).json(clickedContact);
    } catch (err) {
      return next({
        status: 400,
        message: err.message,
      });
    }
  };


  exports.addContact = async (req, res, next) => { 
    const { name, phoneNumber, address, gender, shortBio, uploadedFile } = req.body;
    try {
      const file = req.files.uploadedFile;
      const customFile =file.name;

      file.mv(`../client/public/uploads/${customFile}`);
      const addCont = await db.Contacts.create({
        name,
        phoneNumber,
        address,
        gender,
        shortBio,
        customFile,
      });
      await addCont.save();
      return res.status(200).json(addCont);
    
    } catch (err) {
     
      return next({
        status: 400,
        message: err.message,
      });
    }
  };