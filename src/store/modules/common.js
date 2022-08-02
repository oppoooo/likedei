import { verify } from "@/api/common";
// import { login } from "@/api";
export default {
  namespaced: true,
  state: {
    verification: "",
    // userLogin: [],
    userData: {},
  },
  // 修改state数据唯一来源
  mutations: {
    setVerification(state, payload) {
      state.verification = payload;
    },
    // 获取用户数据
    getUserData(state, payload) {
      state.userData = payload;
    },
  },
  // 异步
  actions: {
    // 得到验证码
    async getVerification(context, payload) {
      const res = await verify(payload);
      context.commit("setVerification", res.request.responseURL);
    },
  },
};
