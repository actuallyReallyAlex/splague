import { SET_IS_VISIBLE } from "../actionTypes";
import { MenuAction } from "../../types";

export const setIsVisible = (isVisible: boolean): MenuAction => ({
  type: SET_IS_VISIBLE,
  payload: { isVisible },
});
