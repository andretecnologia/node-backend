const express = require('express');
const router = express.Router();

const adminController = require('./admin.controller');


router.post('/add/post', adminController.createPost);

router.post('/add/comment', adminController.createComment);


module.exports = router;