const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: "Mini Messageboard"});
});

router.post('/new', function(req, res, next) {
  const {author, message} = req.body;
  messages.push({user: author, text: message, added: new Date()});
  res.redirect('/')
})

module.exports = router;
