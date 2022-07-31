import request from "@/utils/request";
// 验证码
export function verify(clientToken) {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
  });
}

// 登录接口
export function login(data) {
  return request({
    url: "/api/user-service/user/login",
    method: "POST",
    data,
  });
}
