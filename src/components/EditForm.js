import React from "react";
import Form from "./Form";

const EditForm = (props) => {
  return (
    <div className="overlay">
      <Form {...props} />
    </div>
  );
};

export default EditForm;
