import axios from "axios";
import store from "@/store/index";
import { getTokenTime } from "@/utils/auth";
import router from "@/router";
console.log(getTokenTime());
function isTimeOut() {
  const current = Date.now();
  const tokenTime = getTokenTime();
  const timeout = 3 * 1000;
  return current - tokenTime > timeout;
}
if (store.state.user.token) {
  if (isTimeOut()) {
    // 判断token是否过期， 如果过期返回登录页
    console.log(11);
    store.dispatch("user/logout");
    router.push("/login");
    Promise.reject(new Error("登录过期"));
  }
}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}); // 创建一个axios的实例
service.interceptors.request.use((config) => {
  console.log(config);
  console.log(store.state.user.token);
  console.log(88);
  if (store.state.user.token) {
    // token没有过期再携带
    config.headers.Authorization = store.state.user.token;
    console.log(11);
  }
  return config;
}); // 请求拦截器
service.interceptors.response.use(); // 响应拦截器
export default service; // 导出axios实例
