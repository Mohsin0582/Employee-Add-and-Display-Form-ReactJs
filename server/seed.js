const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const db = require('./models');

const contacts = [
  { name: 'Mohsin', phoneNumber: '(320)1411821', address:'near hamdard hospital, mall road, lahore ', gender:'male', shortBio:'he is a developer with bad coding wits, but he is a hard worker', customFile:'C:\fakepath\magu.jpg' },
  { name: 'Ali', phoneNumber: '(320)1311821', address:'near cariology hospital, jail road, lahore', gender:'male', shortBio:'he is a doctor with a handful of experience', customFile:'C:\fakepath\magu.jpg' }
];


const seed = async () => {
  try {
    await db.Contacts.remove();
    console.log('DROP ALL Contacts');

    await Promise.all(
      contacts.map(async contact => {
        const data = await db.Contacts.create(contact);
        await data.save();
      }),
    );
    console.log('CREATED Contacts', JSON.stringify(contacts));
  } catch (err) {
    console.error(err);
  }
};

seed();
