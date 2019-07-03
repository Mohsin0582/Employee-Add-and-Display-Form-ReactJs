const router = require('express').Router();
const handle = require('../controllers');

router.route('/').get(handle.getContacts);
//router.get('/', handle.getContacts);
router.route('/add').post(handle.addContact);


router.route('/:id').get(handle.clickedContact);

module.exports = router;