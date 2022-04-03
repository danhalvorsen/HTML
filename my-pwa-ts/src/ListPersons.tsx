
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { db } from "./db";
import { Person } from "./mockRoutes/api.types";

export default function ListPersons() {

  const friends = useLiveQuery(() => {
    //return new Array<Person>();
      return db.friends.toArray();
  });

  return (
    <ul>
      {friends?.map((person) => (
        <li key={person.id}>
          {person.firstName}, {person.email}
        </li>
      ))}
    </ul>
  );
}
