import router from "@/router";
import store from "./store";
const whiteList = ["/login", "/404"];
router.beforeEach((to, from, next) => {
  const token = store.state.user.token;

  if (token) {
    // 获取用户信息
    if (!store.state.user.MyuserInfo.userId) {
      store.dispatch("user/Login");
    }
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    const isCludes = whiteList.includes(to.path);
    if (isCludes) {
      next();
    } else {
      next("/login");
    }
  }
});
