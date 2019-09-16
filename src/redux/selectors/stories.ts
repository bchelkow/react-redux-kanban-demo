import { createSelector } from 'reselect';
import { State } from '../reducers';

export const selectStories = (state: State) => state.stories;
export const selectSourceId = (state: State, props: { id: string }) => props.id;

export const selectStory = createSelector(
  selectStories,
  selectSourceId,
  (stories, id) => stories[id],
);
