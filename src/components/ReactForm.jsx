import React, { Component } from "react";
import "./styles.scss";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
export default class ReactForm extends Component {
  render() {
    return (
      <div>
        <StudentForm />
        <StudentList />
      </div>
    );
  }
}
