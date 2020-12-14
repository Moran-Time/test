<template>
  <div>
    <div class="login_box">
      <div class="login_flex">
        <div class="login_title">
          <h1>NUI-ADMIN</h1>
        </div>
        <div class="login_input">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
          <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
          <el-button type="primary" @click="onLogin">立即登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onLogin() {
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", {
            username: this.username,
            password: this.password,
        })
        .then((res) => {
          console.log(res);
          alert(res.data.msg);
          localStorage.setItem("token", res.data.data.token);
          this.$router.push("/")
        })
        .catch(()=>{
          // console.log(err)
          alert("账户或密码错误")
        });
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.login_box {
  width: 600px;
  height: 500px;
  // border: 1px solid black;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .login_flex {
    width: 85%;
    height: 400px;
    border: 1px solid black;
    margin: 0 auto;

    .login_title {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .login_input {
      width: 100%;
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 10px;
    }
    .el-input {
      width: 80%;
    }
    .el-button--primary {
      width: 80%;
    }
  }
}
</style>