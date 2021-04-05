import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const getMessages = async () => {
      const res = await fetch(`http://localhost:5000/api/messages`);
      const messages = await res.json();

      setMessages(messages);
    };

    getMessages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React</p>
        {messages && messages.map((item) => <p>{item.message}</p>)}
      </header>
    </div>
  );
}

export default App;
