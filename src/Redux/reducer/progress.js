import { SET_PROGRESS } from "./../type";
export const progress = (state = false, { type, payload }) => {
  switch (type) {
    case SET_PROGRESS:
      return payload;
    default:
      return state;
  }
};
