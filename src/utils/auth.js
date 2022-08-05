import Cookies from "js-cookie";

const TokenKey = "vue_admin_template_token";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function setTokenTime() {
  //设置 存储登录时的时间戳
  Cookies.set("tokenTime", Date.now(), { expires: 36500 });
}

// 获取登录时的时间戳
export function getTokenTime() {
  return Cookies.get("tokenTime");
}
