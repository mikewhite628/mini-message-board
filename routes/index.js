var express = require('express');
var router = express.Router();
const messages = require('../public/javascripts/messages')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.post('/new', function(req, res, next){
  const newMessage = {
    user: req.body.username,
    text: req.body.description,
    added: new Date()
  }
  messages.unshift(newMessage);
  res.redirect('/')
})

module.exports = router;
