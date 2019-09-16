import { initLists } from '../constants/lists';

export interface ListsState {
  [id: string]: { id: string, dashboardId: string, name: string },
}

export default (state: ListsState = initLists) => state;
