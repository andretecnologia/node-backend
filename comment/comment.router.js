const express = require('express');
const router = express.Router();

const commentController = require('./comment.controller');

router.get('/', commentController.getComments);

router.get('/post/:id', commentController.getPostComments);

router.get('/:id', commentController.getComment);

router.put('/:id', commentController.updateComment);

router.delete('/:id', commentController.deleteComment);


module.exports = router;