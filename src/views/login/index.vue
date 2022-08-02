<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      class="login-form"
      auto-complete="on"
      label-position="left"
      :model="loginForm"
      :rules="loginFormRules"
    >
      <!-- logo -->
      <div class="logo">
        <img src="../../assets/img/微信图片_20220730221439.png" alt="" />
      </div>
      <!-- 表单 -->
      <!-- 手机 -->
      <el-form-item prop="mobile">
        <i class="el-icon-mobile-phone svg-container"></i>
        <el-input v-model="loginForm.mobile"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <i class="el-icon-lock svg-container"> </i>
        <!-- 不显示密码 -->
        <el-input
          v-show="passwordShow"
          type="password"
          v-model="loginForm.password"
        ></el-input>
        <!-- 不显示密码 -->
        <el-input
          v-show="!passwordShow"
          v-model="loginForm.password"
        ></el-input>
        <svg-icon
          v-show="passwordShow"
          @click="passwordShow = !passwordShow"
          iconClass="eye"
        ></svg-icon>
        <svg-icon
          @click="passwordShow = !passwordShow"
          v-show="!passwordShow"
          iconClass="eye-open"
        ></svg-icon>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="yzm" class="verification">
        <i class="svg-container">
          <svg-icon iconClass="yzm"></svg-icon>
        </i>
        <el-input ref="focu" placeholder="请输入验证码" v-model="loginForm.yzm">
        </el-input>
        <span @click="getVerification" class="pic">
          <img style="height: 50px" :src="verification" alt="" />
        </span>
      </el-form-item>
      <el-button
        @click="login"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/index.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState: userMapState, mapMutations: userMapMutations } =
  createNamespacedHelpers("user");
import { login } from "@/api/index";
export default {
  name: "Login",
  data() {
    return {
      passwordShow: true,
      myClientToken: "",
      loginForm: {
        mobile: "admin",
        password: "admin",
        yzm: "",
      },
      // 账号密码验证规则
      loginFormRules: {
        mobile: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        yzm: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  computed: {
    ...userMapState(["verification"]),
    ...userMapState(["userData"]),

    // ...userMapState(["userLogin"]),
  },
  methods: {
    // 获取验证码
    getVerification() {
      const random = Math.ceil(Math.random() * 999);
      this.myClientToken = random;
      console.log(random);
      this.$store.dispatch("user/getVerification", random);
    },
    // 登录验证
    ...userMapMutations(["getUserData"]),

    async login() {
      try {
        const res = await login({
          loginName: this.loginForm.mobile,
          password: this.loginForm.password,
          mobile: "",
          code: this.loginForm.yzm,
          clientToken: this.myClientToken,
          loginType: "0",
          account: "",
        });

        console.log(res);
        console.log(res.data.success);
        if (this.loginForm.yzm.length === 0) {
          this.$refs.focu.focus();
          return this.$refs.focu.blur();
        }
        if (!res.data.success && this.loginForm.yzm > 0) {
          return this.$message({
            type: "info",
            message: res.data.msg,
          });
        }
        if (res.data.success) {
          this.getUserData(res.data);
          // 将数据传回vuex
          console.log(this.userData);
          this.$router.push("/dashboard");
        }
      } catch (error) {}
    },
  },
  created() {
    this.getVerification();
    console.log(this.verification);
  },
  components: { SvgIcon },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .verification {
    position: relative;
    top: 0;
    left: 0;
    .pic {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  background-image: url("../../assets/img/微信图片_20220730200442.png"); // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕
  .el-input {
    display: inline-block;
    height: 50px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #999;
      height: 50px;
      caret-color: #999;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    .el-form-item__content {
      height: 50px;
    }
  }
}
.el-message {
  background-color: #fef0f0;
  .el-message__content {
    color: #f56c6c;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .yzm {
    display: inline-block;
    background-color: red;
    width: 130px;
    height: 50px;
  }
  .el-input input {
    caret-color: #c40a0a;
  }

  .el-button--primary {
    background: #6b7def;
    height: 52px;
    border-radius: 10px;
  }
  .login-form {
    .logo {
      position: absolute;
      top: -48px;
      left: 50%;
      margin-left: -48px;
      img {
        width: 96px;
        height: 96px;
      }
    }
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    width: 520px;
    height: 388px;
    max-width: 100%;
    padding: 76px 35px 0;
    // margin: 0 auto;    overflow: hidden;
    background-color: #fff;
    border-radius: 10px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    font-size: 16px;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
