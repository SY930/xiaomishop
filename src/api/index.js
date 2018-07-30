/**
 * Created by Administrator on 2018/4/27.
 */
import axios from 'axios'

axios.interceptors.response.use((res)=>{
  return res.data;
});
export let getGoods = (param) =>{
  return axios.get('/goods/list',{params:param})
};
export let addCarts = (productId)=>{
  return axios.post('/goods/addCart',{productId:productId})
};
export let logins = (userName,userPwd)=>{
  return axios.post('/users/login',{userName:userName,userPwd:userPwd})
};
export  let logOuts = ()=>{
  return axios.post('/users/logout')
};
export let checkLogin=()=>{
  return axios.get('/users/checkLogin')
};
export let getCartList=()=>{
  return axios.get('/users/cartList');
};
export let delCarts=(productId)=>{
  return axios.post('/users/cartDel',{productId:productId})
};
export let updateCart=(productId,productNum,checked)=>{
  return axios.post('/users/cartEdit',{productId:productId,productNum:productNum,checked:checked})
};
export let editCheckAlls = (checkAll)=>{
  return axios.post('/users/editCheckAll',{checkAll:checkAll})
};

//address
export let getAddressList = ()=>{
  return axios.get('/users/addressList')
};
export let setAddress = (addressId)=>{
  return axios.post('/users/setDefault',{addressId:addressId})
};

export  let delAddresses = (addressId)=>{
  return axios.post('/users/delAddress',{addressId:addressId})
};
export let postPayMent = (addressId,orderTotal)=>{
  return axios.post('/users/payMent',{addressId:addressId,orderTotal:orderTotal})
}

