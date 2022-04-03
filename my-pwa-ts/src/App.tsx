import React, { useState, useEffect, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Dexie from 'dexie';
import { Person } from "./mockRoutes/api.types"
import { AddFriendForm } from "./AddPersonForm";
import ListPersons from "./ListPersons";

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
    } catch (error) {
      console.error(error);
    }
  };

  const [counter, setCounter] = useState<number>(0)
  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <span id="counter">{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </div>

      <button onClick={handleBroadCastChannelClick}>Broadcast</button>
      <button onClick={getPersonRequest}>Send API/Person HttpCall</button>
      
      <div id="something"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        
      </header>
      <h2>Add Persons</h2>
      <AddFriendForm defaultAge={21} />
      <h2>List Persons</h2>
      <ListPersons></ListPersons>
      
    </div>
  );
}

export default App;
