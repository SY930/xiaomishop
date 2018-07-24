/**
 * Created by 86759 on 2018/7/9.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prodcutSchema = new Schema({
  "productId":{type:String},
  "productName":String,
  "checked":String,
  "salePrice":Number,
  "productNum":Number,
  "productImage":String
});

module.exports = mongoose.model('Good',prodcutSchema)
