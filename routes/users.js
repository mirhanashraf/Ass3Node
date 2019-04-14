var express = require('express');
var router = express.Router();
const prod = require('../data');
/* GET users listing. */
router.get('/add', (req, res) => {
  res.render('addUser');
  
})
router.get('/:id', function (req, res, next) {
  debugger
  const pr = prod.filter(p => (p.prodId === +req.params.id));
  res.render('user', { prod: pr[0] });
});

router.get('/', (req, res) => {
  // res.send('hello!!')
})

router.post('/:id', (req, res) => {
  // console.log(req.body);
  debugger
  const p=prod.find(p=>(p.prodId===+req.params.id));
  p.prodName=req.body.prodName;
  p.price=req.body.price;
  p.category=req.body.category;
  res.redirect('/')
})


module.exports = router;
