<template>
  <div>
    <h1>Sign Up</h1>
    <input
      type="text"
      name="userName"
      placeholder="Username"
      v-model="userName"
    />
    <input
      type="text"
      name="password"
      placeholder="Password"
      v-model="password"
    />
    <input
      type="text"
      name="repeat"
      placeholder="Password (repeat)"
      v-model="passwordRepeat"
    />
    <input type="button" @click="signUp()" value="Sign Up" />
    <p v-if="msg" name="msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      passwordRepeat: "",
      msg: "",
    };
  },
  methods: {
    signUp() {
      if (
        this.userName !== "" &&
        this.password !== "" &&
        this.passwordRepeat !== ""
      ) {
        if (this.password === this.passwordRepeat) {
          var _userName = this.userName;
          var _password = this.password;
          this.$store.commit("ADD_USER", { _userName, _password });
          //this.$store.commit("SET_CURRENT_USER", this.userName);
        } else {
          this.msg = "Repeat password is not the same as password";
        }
      } else {
        this.msg = "Please fill whole inputs";
      }
    },
  },
};
</script>
