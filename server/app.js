const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const fileupload=require('express-fileupload');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(fileupload());

const routes = require('./routes');
const handle = require('./controllers');

app.use('/api/contacts', routes.contact);

app.use(handle.error);

var PORT=4000;
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});