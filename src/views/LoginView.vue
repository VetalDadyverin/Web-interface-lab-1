<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="Username" v-model="userName" />
    <input type="text" placeholder="Password" v-model="password" />
    <input type="button" @click="login()" value="Login" />
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    login() {
      if (this.userName !== "" && this.password !== "") {
        var _userName = this.userName;
        var _password = this.password;
        this.$store.commit("LOGIN", { _userName, _password });
        if (!this.$store.state.userView) {
          this.msg = "Uncorrect username or password";
        }
      } else {
        this.msg = "Please fill whole inputs";
      }
    },
  },
};
</script>
