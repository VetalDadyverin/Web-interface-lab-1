import User from "./User";

export default class Users {
  constructor() {
    this.users = [];
  }

  add_user(_user_name, _password) {
    const user = new User(_user_name, _password);
    this.users.push(user);
  }

  delete_by_user_name(_user_name) {
    const index = this.users.findIndex((x) => x.user_name === _user_name);
    console.log(index);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
    console.log(this.users[0]);
  }

  check_for_user(_user_name, _password) {
    for (var i = 0; i < this.users.length; ++i) {
      if (
        this.users[i].user_name === _user_name &&
        this.users[i].password === _password
      ) {
        return this.users[i];
      }
    }
    return false;
  }

  find_by_user_name(_user_name) {
    for (var i = 0; i < this.users.length; ++i) {
      if (this.users[i].user_name === _user_name) {
        return this.users[i];
      }
    }
  }

  change_user_by_user_name(_user_name, new_user_name, new_password) {
    const index = this.users.findIndex((x) => x.user_name === _user_name);
    this.users[index].change_user_name(new_user_name);
    this.users[index].change_password(new_password);
    return this.users[index];
  }
}
