import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudentAction } from "../store/actions/studentAction";

class StudentForm extends Component {
  state = {
    values: {
      id: "",
      fullName: "",
      phoneNumber: "",
      email: "",
    },
    errors: {
      id: "",
      fullName: "",
      phoneNumber: "",
      email: "",
    },
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };
  handleSubmit = () => {
    return this.props.dispatch(addStudentAction(this.state.values));
  };
  handleBlur = (event) => {
    // validation message is already available in the target property
    const { name, validity, minLength, maxLength, title } = event.target;
    const { valueMissing, tooShort, tooLong } = validity;
    let message = "";

    if (valueMissing) {
      message = "Trường này không được bỏ trống.";
    }

    if (tooShort || tooLong) {
      message = `${title} phải từ ${minLength} đến ${maxLength} ký tự`;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        [name]: message,
      },
    });
  };
  render() {
    return (
      <div className="card studentFormContainer">
        <div className="card-header bg-dark text-light">
          Thông tin sinh viên
        </div>
        <div className="card-body">
          <form
            onSubmit={(event) => {
              //prevent the page from reloading when clicking submit
              event.preventDefault();
              this.handleSubmit();
            }}
          >
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="studentId">Mã SV</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="id"
                    id="studentId"
                    aria-describedby="helpId"
                    onChange={(event) => this.handleChange(event)}
                    onBlur={(event) => this.handleBlur(event)}
                  />
                  <span className="text-danger">{this.state.errors.id}</span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="fullName">Họ tên</label>
                  <input
                    required
                    title="Họ tên"
                    minLength={5}
                    maxLength={10}
                    type="text"
                    className="form-control"
                    name="fullName"
                    id="fullName"
                    aria-describedby="helpId"
                    onChange={(event) => this.handleChange(event)}
                    onBlur={(event) => this.handleBlur(event)}
                  />
                  <span className="text-danger">
                    {this.state.errors.fullName}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Số điện thoại</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    id="phoneNumber"
                    aria-describedby="helpId"
                    onChange={(event) => this.handleChange(event)}
                    onBlur={(event) => this.handleBlur(event)}
                  />
                  <span className="text-danger">
                    {this.state.errors.phoneNumber}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="helpId"
                    onChange={(event) => this.handleChange(event)}
                    onBlur={(event) => this.handleBlur(event)}
                  />
                  <span className="text-danger">{this.state.errors.email}</span>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white border-0">
              <button className="btn btn-success" type="submit">
                Thêm sinh viên
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(StudentForm);
