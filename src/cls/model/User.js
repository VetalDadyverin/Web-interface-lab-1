export default class User {
  constructor(_user_name, _password) {
    this.user_name = _user_name;
    this.password = _password;
    this.games = 0;
  }

  change_user_name(_user_name) {
    this.user_name = _user_name;
  }

  change_password(_password) {
    this.password = _password;
  }

  inc_games() {
    this.games++;
  }
}
