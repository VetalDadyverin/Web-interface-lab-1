<template>
  <div class="userview">
    <div v-if="this.$store.state.choose === true">
      <h3>Login or Sign Up</h3>
      <div class="container">
        <div class="row">
          <button class="btn Login" @click="log()">Login</button>
          <button class="btn SignUp" @click="sign()">Sign Up</button>
        </div>
      </div>
    </div>
    <div v-if="this.$store.state.logging === true">
      <Login />
    </div>
    <div v-if="this.$store.state.signUpping === true">
      <SignUp />
    </div>
    <div
      v-if="
        this.$store.state.logging === true ||
        this.$store.state.signUpping === true
      "
    >
      <button class="btn Login" @click="back()">Back</button>
    </div>
    <div v-if="this.$store.state.userView === true">
      <UserForm />
    </div>
  </div>
</template>

<script>
import Login from "./LoginView.vue";
import SignUp from "./SignUp.vue";
import UserForm from "./UserForm.vue";

export default {
  name: "UserView",
  components: { Login, SignUp, UserForm },
  methods: {
    log() {
      this.$store.state.choose = false;
      this.$store.state.logging = true;
    },
    sign() {
      this.$store.state.choose = false;
      this.$store.state.signUpping = true;
    },
    back() {
      this.$store.state.choose = true;
      this.$store.state.logging = false;
      this.$store.state.signUpping = false;
    },
  },
};
</script>

<style>
.userview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 100px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
}

.container {
  text-align: center;
}
button {
  display: inline-block;
}
</style>
