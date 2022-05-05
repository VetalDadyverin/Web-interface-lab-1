import Component from "./Component";

export default class Grid {
  constructor() {
    this.components = [];
    this.form_components();
  }

  add_component(_number) {
    const component = new Component(_number);
    this.components.push(component);
  }

  form_components() {
    for (var i = 1; i < 15; ++i) {
      this.add_component(i);
    }
    this.add_component(0);
    this.add_component(15);
    //this.shuffle();
  }

  find_zero() {
    for (var i = 0; i < this.components.length; ++i) {
      if (this.components[i].number === 0) {
        return i;
      }
    }
  }

  check_zero(number_index, zero_index) {
    var difference = Math.abs(number_index - zero_index);
    return (
      (difference === 1 &&
        Math.floor(number_index / 4, 10) === Math.floor(zero_index / 4, 10)) ||
      difference == 4
    );
  }

  swap(first, second) {
    var buffer = this.components[first];
    this.components[first] = this.components[second];
    this.components[second] = buffer;
  }

  try_to_swap(number_index) {
    var zero_index = this.find_zero();
    if (this.check_zero(number_index, zero_index)) {
      this.swap(number_index, zero_index);
      return true;
    }
    return false;
  }

  check_shuffled() {
    var result = 0;
    for (var i = 0; i < this.components.length; ++i) {
      if (this.components[i].number !== 0) {
        for (var j = 0; j < i; ++j) {
          if (this.components[j].number !== 0) {
            if (this.components[i].number < this.components[j].number) {
              result++;
            }
          }
        }
      }
    }
    result += Math.floor(this.find_zero() / 4) + 1;
    return !(result & 1);
  }

  check_solved() {
    for (var i = 0; i <= this.components.length - 2; ++i) {
      if (this.components[i].number !== i + 1) {
        return false;
      }
    }
    return true;
  }

  shuffle() {
    var from, to;
    do {
      for (var i = 0; i < 200; ++i) {
        from = Math.floor(Math.random() * 16);
        to = Math.floor(Math.random() * 16);
        this.swap(from, to);
      }
    } while (this.check_shuffled());
  }
}
