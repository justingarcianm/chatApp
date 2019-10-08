import React, { Component } from "react";

export class MessageList extends Component {
  render() {
    return (
      <div>
        <ul className="message-list">
          {this.props.messages.map(message => {
            return (
              <li key={message.senderId}>
                <div>{message.senderId}</div>
                <div>{message.text}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MessageList;
