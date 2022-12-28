import { ADD_STUDENT } from "../types/studentType";

export const addStudentAction = (payload) => {
  return {
    type: ADD_STUDENT,
    payload,
  };
};
