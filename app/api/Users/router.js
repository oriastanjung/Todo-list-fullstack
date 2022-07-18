const router = require('express').Router();

const {signup, signin, getAllUser} = require('./controller');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/', getAllUser);

module.exports = router;