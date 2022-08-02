<template>
  <div class="app-wrapper">
    <el-container>
      <el-header
        ><!-- 帝可得 顶部 -->
        <div class="top-navigation">
          <!-- logo -->
          <div class="pic">
            <img class="pic" src="@/assets/img/logo.3673fab5.png" alt="" />
          </div>
          <!-- 右侧用户名 -->
          <div class="top-user">
            <div class="avatar">
              <img src="@/assets/img/下载.png" alt="" />
            </div>
            <div class="username">欢迎您，<span>admin</span></div>
            <div class="userQuit">
              <span>退出</span>
              <span class="el-icon-caret-bottom"></span>
            </div>
          </div></div
      ></el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <!-- <el-menu default-active="1-4-1">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu> -->

          <el-menu :default-openeds="['1', '4']">
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">帝可得</span>
            </el-menu-item>

            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>导航一</template
              >
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-menu"></i>导航二</template
              >
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"
                ><i class="el-icon-setting"></i>导航三</template
              >
              <el-menu-item-group>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";
import { createNamespacedHelpers } from "vuex";
const { mapActions: userServeMapActions } =
  createNamespacedHelpers("userServe");
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  name: "Layout",
  components: {},
  mixins: [ResizeMixin],
  computed: {},
  created() {
    this.$store.dispatch("userServe/getUserInfo", "1");
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
// 顶部导航
.top-navigation {
  width: 100%;
  height: 60px;
  background-color: #5373e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .pic {
    margin-left: 15px;
    width: 88px;
    height: 36px;
  }
  .top-user {
    margin-right: 24px;
    display: flex;
    align-items: center;
    height: 100%;
    color: #fff;
    .avatar {
      width: 48px;
    }
    .username {
      width: 140px;
    }
    .userQuit {
      width: 48px;
    }
  }
}
.el-header {
  padding: 0;
}
</style>
