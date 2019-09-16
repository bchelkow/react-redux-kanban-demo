import { createSelector } from 'reselect';
import { selectStories } from './stories';
import { State } from '../reducers';

export const selectLists = (state: State) => state.lists;
export const selectSourceId = (state: State, props: { id: string }) => props.id;

export const selectList = createSelector(
  selectLists,
  selectSourceId,
  (lists, id) => lists[id],
);

export const selectListStoryIds = createSelector(
  selectStories,
  selectSourceId,
  (stories, id) => {
    const listStoryIds: string[] = [];
    const storyIds: string[] = Object.keys(stories);

    storyIds.forEach((storyId) => {
      if (stories[storyId].listId === id) {
        listStoryIds.push(storyId);
      }
    });

    return listStoryIds;
  },
);
