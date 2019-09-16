import { MOVE_STORY, initStories } from '../constants/stories';
import { MoveStory } from '../actions/stories';

export interface StoriesState {
  [id: string]: { id: string, listId: string, name: string, description: string },
}

export default (state: StoriesState = initStories, action: MoveStory) => {
  switch (action.type) {
    case MOVE_STORY:
      return {
        ...state,
        [action.storyId]: {
          ...state[action.storyId],
          listId: action.newListId,
        },
      };
    default:
      return state;
  }
};
