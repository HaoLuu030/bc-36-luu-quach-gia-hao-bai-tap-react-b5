import React, { Component } from "react";
import {
  deleteStudentAction,
  selectStudentAction,
} from "../store/actions/studentAction";
import { connect } from "react-redux";

class StudentItem extends Component {
  setSelectedStudent = (student) => {
    return this.props.dispatch(selectStudentAction(student));
  };
  deleteStudent = (student) => {
    return this.props.dispatch(deleteStudentAction(student));
  };
  render() {
    const { id, fullName, phoneNumber, email } = this.props.student;
    return (
      <>
        <tr>
          <td>{id}</td>
          <td>{fullName}</td>
          <td>{phoneNumber}</td>
          <td>{email}</td>
          <td>
            <div>
              <button
                className="btn btn-warning mr-2"
                onClick={() => {
                  this.setSelectedStudent(this.props.student);
                }}
              >
                Sửa
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.deleteStudent(this.props.student);
                }}
              >
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default connect()(StudentItem);
