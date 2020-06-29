import { SET_CURRENT_PAGE, SET_IS_VISIBLE } from "../actionTypes";
import { MenuAction, MenuPage } from "../../types";

export const setIsVisible = (isVisible: boolean): MenuAction => ({
  type: SET_IS_VISIBLE,
  payload: { isVisible },
});

export const setPage = (page: MenuPage): MenuAction => ({
  type: SET_CURRENT_PAGE,
  payload: { page },
});
