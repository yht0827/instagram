import React, { Component } from "react";
import CommentBox from "./presenter";

class Container extends Component {
  state = {
    comment: ""
  };

  render() {
    return (
      <CommentBox
        handleInputChange={this._handleInputChange}
        {...this.props}
        {...this.state}
        handleKeyPress={this._handldeKeyPress}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      comment: value
    });
  };

  _handldeKeyPress = event => {
    const { submitComment } = this.props;
    const { comment } = this.state;
    const { key } = event;
    if (key === "Enter") {
      event.preventDefault();
      submitComment(comment);
      this.setState({ comment: "" });
    }
  };
}

export default Container;
