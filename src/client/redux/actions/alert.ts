import {
  SET_ALERT_CONTENT,
  SET_ALERT_PRIMARY_ACTION,
  SET_ALERT_PRIMARY_ACTION_TEXT,
  SET_ALERT_SECONDARY_ACTION,
  SET_ALERT_SECONDARY_ACTION_TEXT,
  SET_ALERT_TITLE,
} from "../actionTypes";
import { AlertAction } from "../../types";

export const setAlertContent = (content: string): AlertAction => ({
  type: SET_ALERT_CONTENT,
  payload: { content },
});

export const setAlertPrimaryAction = (
  primaryAction: () => void
): AlertAction => ({
  type: SET_ALERT_PRIMARY_ACTION,
  payload: { primaryAction },
});

export const setAlertPrimaryActionText = (
  primaryActionText: string
): AlertAction => ({
  type: SET_ALERT_PRIMARY_ACTION_TEXT,
  payload: { primaryActionText },
});

export const setAlertSecondaryAction = (
  secondaryAction: () => void
): AlertAction => ({
  type: SET_ALERT_SECONDARY_ACTION,
  payload: { secondaryAction },
});

export const setAlertSecondaryActionText = (
  secondaryActionText: string
): AlertAction => ({
  type: SET_ALERT_SECONDARY_ACTION_TEXT,
  payload: { secondaryActionText },
});

export const setAlertTitle = (title: string): AlertAction => ({
  type: SET_ALERT_TITLE,
  payload: { title },
});
