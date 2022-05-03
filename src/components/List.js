import React from "react";

const List = (props) => {
  return (
    <ol>
      {props.data.map((note) => {
        return (
          <li key={note.id}>
            {note.firstname} {note.lastname} | {note.phone} | {note.role} |{" "}
            {note.message} |
            <span
              className="material-symbols-rounded"
              onClick={() => props.delete(note.id)}
            >
              delete
            </span>
            <span
              className="material-symbols-rounded"
              onClick={() => props.edit(note)}
            >
              edit
            </span>
          </li>
        );
      })}
    </ol>
  );
};

export default List;
