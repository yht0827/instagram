import React, { Component } from "react";
import LoginForm from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        usernameValue={username}
        passwordValue={password}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value // [name]은 해당 variable을 의미함
    });
  };

  _handleSubmit = event => {
    event.preventDefault();
    // redux action here
  };
}

export default Container;
