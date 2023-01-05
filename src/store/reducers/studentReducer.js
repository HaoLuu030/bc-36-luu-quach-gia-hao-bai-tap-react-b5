import {
  ADD_STUDENT,
  DELETE_STUDENT,
  RESET_FORM,
  SEARCH_STUDENT,
  SELECT_STUDENT,
  UPDATE_STUDENT,
} from "../types/studentType";

const DEFAULT_STATE = {
  studentList: [
    {
      id: "1",
      fullName: "Nguyễn Văn A",
      phoneNumber: "0930333333",
      email: "nguyenvana@gmail.com",
    },
    {
      id: "2",
      fullName: "Trần Văn B",
      phoneNumber: "0955558799",
      email: "tranvanb@gmail.com",
    },
  ],
  selectedStudent: null,
  searchList: [],
  isUpdateStudent: false,
};

export const studentReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_STUDENT: {
      const data = [...state.studentList];
      data.push(payload);
      state.studentList = data;
      alert("Thêm sinh viên thành công");
      break;
    }

    case SELECT_STUDENT: {
      state.selectedStudent = payload;
      state.isUpdateStudent = true;
      break;
    }

    case UPDATE_STUDENT: {
      state.studentList = state.studentList.map((element) =>
        element.id === payload.id ? payload : element
      );
      state.isUpdateStudent = false;
      state.selectedStudent = null;
      alert("Cập nhật thành công");
      break;
    }

    case DELETE_STUDENT: {
      state.studentList = state.studentList.filter((element) =>
        element.id === payload.id ? false : true
      );
      break;
    }

    case SEARCH_STUDENT: {
      const filteredList = state.studentList.filter((element) => {
        if (element.fullName.toLowerCase().includes(payload.toLowerCase())) {
          return true;
        }
        return false;
      });

      state.searchList = filteredList;
      break;
    }

    case RESET_FORM: {
      state.selectedStudent = null;
      state.isUpdateStudent = false;
      break;
    }

    default:
      break;
  }
  return { ...state };
};
