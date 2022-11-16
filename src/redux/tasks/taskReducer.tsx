import { task } from "../states/types";

const init: task = {};

export const taskReducer = (state: task = init, action: any) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
