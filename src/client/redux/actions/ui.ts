import { SET_IS_LOADING, SET_THEME } from "../actionTypes";
import { Theme, UIAction } from "../../types";

export const setIsLoading = (isLoading: boolean): UIAction => ({
  type: SET_IS_LOADING,
  payload: { isLoading },
});

export const setTheme = (theme: Theme): UIAction => ({
  type: SET_THEME,
  payload: { theme },
});
