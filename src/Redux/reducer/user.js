import { SET_USER } from "../type";

export const user = (state = null, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return payload;
    default:
      return state;
  }
};
