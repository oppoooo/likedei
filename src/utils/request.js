import axios from "axios";
const service = axios.create({
  baseURL: "http://likede2-admin.itheima.net/likede/",
  timeout: 5000,
}); // 创建一个axios的实例
service.interceptors.request.use(); // 请求拦截器
service.interceptors.response.use(); // 响应拦截器
export default service; // 导出axios实例
