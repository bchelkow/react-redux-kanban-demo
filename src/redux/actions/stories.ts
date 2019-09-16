import { MOVE_STORY } from '../constants/stories';

export interface MoveStory {
  type: string,
  storyId: string,
  newListId: string,
}

export const moveStory = (storyId: string, newListId: string): MoveStory => ({
  type: MOVE_STORY,
  storyId,
  newListId,
});
