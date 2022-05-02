import React, { Component } from "react";
import axios from "axios";

import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import List from "./components/List";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
    showPopup: false,
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/note")
      .then((res) => this.setState({ data: res.data }));
  }

  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popUpHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  closeHandler = () => {
    window.location.reload();
  };

  submitHandler = () => {
    axios
      .post("http://localhost:3001/note", this.state.inputData)
      .then((res) => console.log("res", res))
      .catch((error) => console.log("error", error));

    this.closeHandler();
  };

  render() {
    // console.log(this.state.data);
    return (
      <>
        <div className="form_area">
          <Form change={this.inputHandler} submit={this.popUpHandler} />
          <View {...this.state.inputData} />
        </div>
        <List data={this.state.data} />
        {this.state.showPopup && (
          <Popup 
          close={this.closeHandler} 
          {...this.state.inputData}
          submit= {this.submitHandler} 
          />
        )}
      </>
    );
  }
}

export default App;
