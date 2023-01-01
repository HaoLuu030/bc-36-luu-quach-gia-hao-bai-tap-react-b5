import {
  ADD_STUDENT,
  SELECT_STUDENT,
  UPDATE_STUDENT,
} from "../types/studentType";

export const addStudentAction = (payload) => {
  return {
    type: ADD_STUDENT,
    payload,
  };
};

export const selectStudentAction = (payload) => {
  return {
    type: SELECT_STUDENT,
    payload,
  };
};

export const updateStudentAction = (payload) => {
  return {
    type: UPDATE_STUDENT,
    payload,
  };
};
