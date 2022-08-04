import { verify, login, getUserInfo } from "@/api/user";
import { Message } from "element-ui";
import { setTokenTime } from "@/utils/auth";
export default {
  namespaced: true,
  state: {
    verification: "",
    token: "",
    MyuserInfo: "",
  },
  // 修改state数据唯一来源
  mutations: {
    setVerification(state, payload) {
      state.verification = payload;
    },
    userToken(state, payload) {
      state.token = payload;
    },
    setUserInfo(state, payload) {
      state.MyuserInfo = payload;
    },
    // 删除token
    removeToken(state, payload) {
      state.token = payload;
    },
    // 删除用户资料
    removeUerInfo(state, payload) {
      state.MyuserInfo = payload;
    },
  },
  // 异步
  actions: {
    // 得到验证码
    async getVerification(context, payload) {
      const res = await verify(payload);
      console.log(res);
      context.commit("setVerification", res.request.responseURL);
    },
    // 登录
    async Login(context, payload) {
      const res = await login(payload);
      console.log(res);
      if (res.data.success === false) {
        Message.error(res.data.msg);
      }
      context.commit("userToken", res.data.token);
      setTokenTime();
      // 用户信息
      const userInfo = await getUserInfo(res.data.userId);
      console.log(userInfo);
      context.commit("setUserInfo", {
        ...userInfo.data,
      });
      setTokenTime();
    },
    // 登出
    logout(context) {
      // 删除token
      context.commit("removeToken", "");
      context.commit("removeUerInfo", {});
    },
  },
};
