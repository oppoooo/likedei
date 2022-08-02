import { getUserInfo } from "@/api/user";
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    // 获取用户信息
    async getUserInfo(context, payload) {
      // const res = await getUserInfo('1');
      console.log(payload);
      // console.log(res);
    },
  },
};
