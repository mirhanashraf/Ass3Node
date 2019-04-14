var express = require('express');
var router = express.Router();
const products=require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { products: products})
});
router.post('/add',function(req,res,next){
  debugger
  products.push({prodId:Number(products.length+1),prodName:req.body.prodName,price:req.body.price,category:req.body.category});
  res.redirect('/');

})
router.get('/delete/:id',function(req,res,next){
  debugger
  const ind=products.findIndex(p=>(p.prodId===+req.params.id));
  products.splice(ind,1);
  res.redirect('/');

})
module.exports = router;
