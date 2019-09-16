import { combineReducers } from 'redux'
import dashboard, { DashboardState } from './dashboard';
import lists, { ListsState } from './lists';
import stories, { StoriesState } from "./stories";

export interface State {
  dashboard: DashboardState,
  lists: ListsState,
  stories: StoriesState,
}

export default combineReducers<State>({ dashboard, lists, stories });
