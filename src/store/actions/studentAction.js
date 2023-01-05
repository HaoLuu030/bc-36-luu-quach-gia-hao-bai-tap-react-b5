import {
  ADD_STUDENT,
  DELETE_STUDENT,
  RESET_FORM,
  SEARCH_STUDENT,
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

export const deleteStudentAction = (payload) => {
  return {
    type: DELETE_STUDENT,
    payload,
  };
};

export const searchStudentAction = (payload) => {
  return {
    type: SEARCH_STUDENT,
    payload,
  };
};

export const resetFormAction = () => {
  return {
    type: RESET_FORM,
  };
};
