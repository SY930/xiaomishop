/**
 * Created by 86759 on 2018/7/9.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prodcutSchema = new Schema({
  "productName":{type:String},
  "productAge":String,
  "salePrice":Number,
  "productImage":String
});

module.exports = mongoose.model('Good',prodcutSchema)
