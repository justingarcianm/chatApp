import React, { Component } from "react";

export class SendMessageForm extends Component {
  render() {
    return (
      <form className="send-medssage-form">
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="fType your message and hit Enter"
          type="text"
        />
      </form>
    );
  }
}

export default SendMessageForm;
