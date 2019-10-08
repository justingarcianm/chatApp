import React, { Component } from "react";
import Title from "./Components/Title";
import MessageList from "./Components/MessageList";
import SendMessageForm from "./Components/SendMessageForm";

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
];

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: DUMMY_DATA
    };
  }
  render() {
    return (
      <div className="app">
        <Title />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
