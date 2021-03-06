//axios封装
import axios from 'axios'

//发送网络请求
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123718152.136.185.210:8000/api/n3',
    timeout: 5000
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err =>{
    console.log(err)
    return err
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
    return err
  })
  //回调函数
  return instance(config)
}