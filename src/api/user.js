import request from "@/utils/request";

// 验证码
export function verify(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
  });
}

// 登录接口
export function login(data) {
  return request({
    url: "/user-service/user/login",
    method: "POST",
    data,
  });
}
// 获取用户基本信息
export function getUserInfo(id) {
  return request({
    url: `/user-service/user/${id}`,
  });
}
