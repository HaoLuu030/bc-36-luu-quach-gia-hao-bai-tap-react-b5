import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addStudentAction,
  resetFormAction,
  updateStudentAction,
} from "../store/actions/studentAction";

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
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
  handleSubmit = (event) => {
    // prevent suggestion popup in the form
    event.preventDefault();
    const isValid = event.target.checkValidity();
    if (!isValid) {
      return;
    }
    // if a student has been selected then update instead of adding
    if (this.props.selectedStudent) {
      this.handleReset();
      return this.props.dispatch(updateStudentAction(this.state.values));
    } else {
      for (let element of this.props.studentList) {
        if (element.id === this.state.values.id) {
          alert("Mã sinh viên bị trùng lặp");
          return;
        }
        this.handleReset();
        return this.props.dispatch(addStudentAction(this.state.values));
      }
    }
  };
  handleBlur = (event) => {
    // validation message is already available in the target property
    const { name, validity, minLength, maxLength, title } = event.target;
    const { valueMissing, tooShort, tooLong, patternMismatch } = validity;
    let message = "";

    if (valueMissing) {
      message = "Trường này không được bỏ trống.";
    }

    if (tooShort || tooLong) {
      message = `${title} phải từ ${minLength} đến ${maxLength} ký tự`;
    }

    if (patternMismatch) {
      message = "Vui lòng điền đúng định dạng";
    }

    this.setState({
      errors: {
        ...this.state.errors,
        [name]: message,
      },
    });
  };

  handleReset = () => {
    this.setState({
      values: {
        id: "",
        fullName: "",
        phoneNumber: "",
        email: "",
      },
    });
    return this.props.dispatch(resetFormAction());
  };

  static getDerivedStateFromProps = (nextProps, currentState) => {
    if (
      nextProps.selectedStudent &&
      nextProps.selectedStudent.id !== currentState.values.id
    ) {
      currentState.values = nextProps.selectedStudent;
    }
    return currentState;
  };

  render() {
    //"id = """ is a "default case in destructuring"
    const {
      id = "",
      fullName = "",
      phoneNumber = "",
      email = "",
    } = this.state.values || {};
    return (
      <div className="card studentFormContainer">
        <div className="card-header bg-dark text-light">
          Thông tin sinh viên
        </div>
        <div className="card-body">
          <form
            ref={this.formRef}
            noValidate
            onSubmit={(event) => {
              //prevent the page from reloading when clicking submit
              event.preventDefault();
              this.handleSubmit(event);
            }}
          >
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="studentId">Mã SV</label>
                  <input
                    value={id}
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
                    value={fullName}
                    required
                    title="Họ tên"
                    minLength={5}
                    maxLength={50}
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
                    value={phoneNumber}
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
                    value={email}
                    required
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="helpId"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(event) => this.handleChange(event)}
                    onBlur={(event) => this.handleBlur(event)}
                  />
                  <span className="text-danger">{this.state.errors.email}</span>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white border-0">
              <button
                disabled={!this.formRef.current?.checkValidity()}
                className={`btn btn-${
                  this.props.isUpdateStudent ? "primary" : "success"
                } mr-2`}
                type="submit"
              >
                {this.props.isUpdateStudent ? "Cập nhật" : "Thêm sinh viên"}
              </button>
              <button className="btn btn-danger" onClick={this.handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.studentReducer.selectedStudent,
    isUpdateStudent: state.studentReducer.isUpdateStudent,
    studentList: state.studentReducer.studentList,
  };
};

export default connect(mapStateToProps)(StudentForm);
