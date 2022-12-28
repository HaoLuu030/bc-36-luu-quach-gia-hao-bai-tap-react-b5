import React, { Component } from "react";
import { connect } from "react-redux";
import StudentItem from "./StudentItem";

class StudentList extends Component {
  renderStudent = () => {
    return this.props.studentList.map((element) => {
      return <StudentItem student={element} key={element.id} />;
    });
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
                  placeholder="Tìm kiếm"
                  className="form-control"
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
  };
};

export default connect(mapStateToProps)(StudentList);
