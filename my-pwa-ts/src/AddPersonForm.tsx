import { useState } from "react";
import { db }  from './db'


export function AddFriendForm({defaultAge} = {defaultAge: 21}) {
    const [status, setStatus] = useState("");
    const [firstname, setForename] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
  
    async function addFriend() {
      try {
  
        // Add the new friend!
        const id = await db.friends.add({
            id:  Math.floor(Math.random() * 100),
            azureOid: "",
            username: username,
            firstName: lastname,
            lastName: lastname,
            email: email
          
        });
  
        setEmail(`Friend ${email} successfully added. Got id ${id}`);
        setForename("");
        setEmail("");
      } catch (error) {
        setStatus(`Failed to add ${firstname}: ${error}`);
      }
    }
  
    return <>
      <p>
        {status}
      </p>
      Username:
      <input
        type="text"
        value={username}
        onChange={ev => setUserName(ev.target.value)}
      />
      Name:
      <input
        type="text"
        value={firstname}
        onChange={ev => setForename(ev.target.value)}
      />
      Email:
      <input
        type="text"
        value={email}
        onChange={ev => setEmail(ev.target.value)}
      />
      
      <button onClick={addFriend}>
        Add
      </button>
    </>
  }