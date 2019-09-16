import { createSelector } from 'reselect';
import { selectLists } from "./lists";
import { State } from '../reducers';

export const selectDashboard = (state: State) => state.dashboard;

export const selectDashboardListIds = createSelector(
  selectLists,
  selectDashboard,
  (lists, dashboard) => {
    const dashboardListIds: string[] = [];
    const listIds: string[] = Object.keys(lists);

    listIds.forEach((listId) => {
      if (lists[listId].dashboardId === dashboard.id) {
        dashboardListIds.push(listId);
      }
    });

    return dashboardListIds;
  }
);
