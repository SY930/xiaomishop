/**
 * Created by 86759 on 2018/7/20.
 */
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
"userId":String,
"userName":String,
"userPwd":String,
  "orderList":Array,
  "cartList":[
    {
      "productId":String,
      "productName":String,
      "salePrice":String,
      "productImage":String,
      "checked":String,
      "productNum":String
    }
  ],
  "addressList":Array
});
module.exports = mongoose.model("User",userSchema);