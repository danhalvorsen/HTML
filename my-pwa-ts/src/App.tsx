import React, { useState, useEffect, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {

  useEffect(() => {
    //Make a API cal so that we can verify that API is cached
    axios
      .get("https://reqres.in/api/user")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  //BroadcastChannel communication between client and web worker
  const broadcast = new BroadcastChannel("count-channel");
  broadcast.onmessage = (event) => {
    console.log(event.data.payload);
  };

  function handleBroadCastChannelClick() {
    // Send first request
    console.log("broadcasting a message from client");
    broadcast.postMessage({
      type: "INCREASE_COUNT",
    });
  }

  const getPersonRequest = async () => {
    try {
      const response = await axios.get("api/person/12");
      const data = await response.data;
    console.log(response.status);
    console.log(data);

    }
    catch (error) {
      console.error(error);
    }
      }

  return (
    <div className="App">
      <button onClick={handleBroadCastChannelClick}>Broadcast</button>
      <button onClick={getPersonRequest}>Send API/Person HttpCall</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
