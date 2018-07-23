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
}

