import { ADD_STUDENT } from "../types/studentType";

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

    default:
      break;
  }
  return { ...state };
};
