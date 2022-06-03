<template>
  <div class="profile">
    <h1>User</h1>
    <h4 name="name">Name:{{ this.userName }}</h4>
    <p>
      <input
        type="text"
        name="username"
        placeholder="Username"
        v-model="newName"
      />
    </p>
    <h4 name="pass">Password:{{ this.password }}</h4>
    <p>
      <input
        type="text"
        name="password"
        placeholder="Password"
        v-model="newPassword"
      />
    </p>
    <h4>Played games:{{ this.games }}</h4>
    <div class="container">
      <div class="row">
        <button class="btn Update" @click="update()">Update</button>
        <button class="btn Logout" @click="logout()">Logout</button>
        <button class="btn Delete" @click="Delete()">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: this.$store.state.currentUser.user_name,
      password: this.$store.state.currentUser.password,
      games: this.$store.state.currentUser.games,
      newName: "",
      newPassword: "",
      msg: "",
    };
  },
  methods: {
    logout() {
      this.$store.state.choose = true;
      this.$store.state.logging = false;
      this.$store.state.signUpping = false;
      this.$store.state.userView = false;
    },
    async update() {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      var _userName = this.newName;
      var _password = this.newPassword;
      this.$store.commit("UPDATE", { _userName, _password });
      this.$store.state.userView = false;
      await sleep(100);
      this.$store.state.userView = true;
    },
    Delete() {
      console.log("Delete() = " + this.$store.state.currentUser.user_name);
      this.$store.commit(
        "DELETE_USER",
        this.$store.state.currentUser.user_name
      );
      console.log("Delete() = ");
      this.$store.state.choose = true;
      this.$store.state.logging = false;
      this.$store.state.signUpping = false;
      this.$store.state.userView = false;
    },
  },
};
</script>

<style>
.btn {
  width: 100px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
}
</style>
