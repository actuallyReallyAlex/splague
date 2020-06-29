import { SET_CHAPTER, SET_STORY_TEXT } from "../actionTypes";
import { StoryAction } from "../../types";

export const setChapter = (chapter: number): StoryAction => ({
  type: SET_CHAPTER,
  payload: { chapter },
});

export const setStoryText = (text: string): StoryAction => ({
  type: SET_STORY_TEXT,
  payload: { text },
});
