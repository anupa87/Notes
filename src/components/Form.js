import React from "react";

const Form = (props) => {
  return (
    <form onChange={props.change} onSubmit={props.submit}>
      <div>
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          defaultValue={props.firstname}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          defaultValue={props.lastname}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          defaultValue={props.phone}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id="role" required defaultValue={props.role}>
          <option value="" invalid="true" hidden>
            Choose a role ...
          </option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          required
          defaultValue={props.message}
        />
      </div>
      <input type="submit" value="send" />
    </form>
  );
};

export default Form;
