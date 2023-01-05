import React, { Component } from "react";
import { connect } from "react-redux";
import { searchStudentAction } from "../store/actions/studentAction";
import StudentItem from "./StudentItem";

class StudentList extends Component {
  // state = {
  //   searchInput: "",
  // };
  renderStudent = (list = this.props.studentList) => {
    if (this.props.searchList.length > 0) {
      list = this.props.searchList;
    }
    return list.map((element) => {
      return <StudentItem student={element} key={element.id} />;
    });
  };
  handleSearch = (event) => {
    return this.props.dispatch(searchStudentAction(event.target.value));
  };
  render() {
    return (
      <div className="card border-0">
        <div className="card-header bg-white border-0">
          <div className="row mt-4 px-3 justify-content-end">
            <div className="col-4">
              <div className="form-group mb-0">
                <input
                  type="text"
                  placeholder="Nhập tên sinh viên"
                  className="form-control"
                  onBlur={(event) => {
                    this.handleSearch(event);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table">
            <thead className="bg-dark">
              <tr className="text-light font-weight-bold">
                <td>Mã sinh viên</td>
                <td>Họ tên</td>
                <td>Số điện thoại</td>
                <td>Email</td>
                <td>Tác vụ</td>
              </tr>
            </thead>
            <tbody>{this.renderStudent()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList: state.studentReducer.studentList,
    searchList: state.studentReducer.searchList,
  };
};

export default connect(mapStateToProps)(StudentList);
