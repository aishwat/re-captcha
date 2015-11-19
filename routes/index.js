var express = require('express');
var router = express.Router();
var request=require('supertest');
var host="https://www.google.com/"
var url="recaptcha/api/siteverify";
var secret="6LfvWBETAAAAAMckjfSe8o-SB30alHbKboh-loNY"; //generated for http://example-ä.se
//https://drive.google.com/file/d/0B7tONtP3zP1BdkRWR3ZRTEliRWM/view?usp=sharing
//https://drive.google.com/file/d/0B7tONtP3zP1Bd1lzS3VWTHZCUTA/view?usp=sharing
//image of key and secret

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/', function(req, res, next) {
  console.log(req.body['g-recaptcha-response']);
  request(host)
  .post(url+"?secret="+secret+"&response="+req.body['g-recaptcha-response'])
  .send()
  .end(function(err,_res){
  		res.status(_res.status).send(_res.body);
  })

});

module.exports = router;
