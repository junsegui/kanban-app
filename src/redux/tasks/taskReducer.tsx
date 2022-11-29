import { taskStates } from "../states/types";
import { ADD_TASK } from "./actionTask";

const init: taskStates = {
  boards: [],
};

export const taskReducer = (state = init, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {};
    default:
      return state;
  }
};
