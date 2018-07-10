var express = require('express')
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');


//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/dumall');

//监听数据库是否连接成功
mongoose.connection.on('connected',function () {
  console.log("MongDB connected success");
});


mongoose.connection.on('error',function () {
  console.log("MongDB connected fail");
});


mongoose.connection.on('disconnected',function () {
  console.log("MongDB connected disconnected");
});

//查询
router.get('/',function (req,res,next) {
 Goods.find({},function (err,doc) {
   if(err){
     res.json({
       status:'1',
       msg:err.message
     })
   }else {
     res.json({
       status:'0',
       msg:'',
       result:{
         count:doc.length,
         list:doc
       }
     })
   }
 })
});

module.exports = router;
