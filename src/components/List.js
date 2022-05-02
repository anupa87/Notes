import React from "react";

const List = (props) => {
  return (
    <ol>
      {props.data.map((note) => (
        <li key={note.id}>
          {note.firstname}
          {note.lastname}|{note.phone}|{note.role}|{note.message}
        </li>
      ))}
    </ol>
  );
};

export default List;
