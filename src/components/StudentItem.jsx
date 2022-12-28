import React, { Component } from "react";

export default class StudentItem extends Component {
  render() {
    const { id, fullName, phoneNumber, email } = this.props.student;
    return (
      <>
        <tr>
          <td>{id}</td>
          <td>{fullName}</td>
          <td>{phoneNumber}</td>
          <td>{email}</td>
        </tr>
      </>
    );
  }
}
