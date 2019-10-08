import React, { Component } from "react";
import Title from "./Components/Title";
import MessageList from "./Components/MessageList";
import SendMessageForm from "./Components/SendMessageForm";

const instanceLocator = "v1:us1:30315f18-d9da-432e-9138-32860a7ff023";
const testToken =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/30315f18-d9da-432e-9138-32860a7ff023/token";
const username = "perborgen";
const roomId = "f1b16e89-367d-4c75-918b-f0f2e8ebcb2f";

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
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: "janedoe",
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    });

    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser;
      this.currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      });
    });
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: roomId
    });
  }

  render() {
    return (
      <div className="app">
        <Title />
        <MessageList
          roomId={this.state.roomId}
          messages={this.state.messages}
        />
        <SendMessageForm sendMessages={this.sendMessage} />
      </div>
    );
  }
}

export default App;
