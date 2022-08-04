<template>
  <div class="navbar">
    <div class="right-menu">
      <div class="avatar-container" trigger="click">
        <div class="avatar">
          <div class="userPic">
            <img
              :src="$store.state.user.MyuserInfo.image - 1"
              v-imgError="defaultImg"
            />
          </div>
          <div class="userName">
            欢迎您，<span>{{ $store.state.user.MyuserInfo.roleName }}</span>
          </div>
          <div @click="logout">退出<i class="el-icon-caret-bottom" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import defaultImg from "../../assets/img/下载.png";
export default {
  data() {
    return {
      defaultImg,
    };
  },
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background-color: #5373e0;

  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .app-breadcrumb {
    display: inline-block;
    font-size: 18px;
    line-height: 50px;
    margin-left: 10px;
    color: #ffffff;
    cursor: text;
    .breadBtn {
      background: #84a9fe;
      font-size: 14px;
      padding: 0 10px;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      border-radius: 10px;
      margin-left: 15px;
    }
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    color: #fff;
    fill: currentColor;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      .avatar {
        display: flex;
        line-height: 60px;
        font-size: 16px;
        color: #fff;

        cursor: pointer;
        .userPic {
          width: 48px;
          height: 60px;
          line-height: 80px;
          img {
            line-height: 60px;
          }
        }
        .userName {
          margin-right: 30px;
        }
      }
      .avatar-wrapper {
        // margin-top: 5px;
        position: relative;
        display: flex;
        align-items: center;
        color: #fff;
        cursor: pointer;
        span {
          margin: 0 3px;
        }

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
