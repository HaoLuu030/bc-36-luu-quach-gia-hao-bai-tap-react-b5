import {
  ADD_STUDENT,
  SELECT_STUDENT,
  UPDATE_STUDENT,
} from "../types/studentType";

const DEFAULT_STATE = {
  studentList: [
    {
      id: 1,
      fullName: "Nguyễn Văn A",
      phoneNumber: "0930333333",
      email: "nguyenvana@gmail.com",
    },
    {
      id: 2,
      fullName: "Trần Văn B",
      phoneNumber: "0955558799",
      email: "tranvanb@gmail.com",
    },
  ],
  selectedStudent: null,
};

export const studentReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_STUDENT: {
      const data = [...state.studentList];
      data.push(payload);
      state.studentList = data;
      break;
    }

    case SELECT_STUDENT: {
      state.selectedStudent = payload;
      break;
    }

    case UPDATE_STUDENT: {
      state.studentList = state.studentList.map((element) =>
        element.id === payload.id ? payload : element
      );
      break;
    }

    default:
      break;
  }
  return { ...state };
};
