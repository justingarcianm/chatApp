import React from "react";
import "./App.css";
import Title from "./Components/Title";
import MessageList from "./Components/MessageList";
import SendMessageForm from "./Components/SendMessageForm";

function App() {
  return (
    <div className="App">
      <Title />
      <MessageList />
      <SendMessageForm />
    </div>
  );
}

export default App;
