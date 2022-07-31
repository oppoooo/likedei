import { verify } from "@/api/common";

export default {
  namespaced: true,
  state: {
    verification: "",
  },
  // 修改state数据唯一来源
  mutations: {
    setVerification(state, payload) {
      state.verification = payload;
    },
  },
  // 异步
  actions: {
    // 得到验证码
    async getVerification(context, payload) {
      const res = await verify(payload);

      console.log(res.request.responseURL);
      context.commit("setVerification", res.request.responseURL);
    },
  },
};
