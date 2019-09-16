import { initDashboard } from '../constants/dashboard';

export interface DashboardState {
  id: string, name: string
}

export default (state: DashboardState = initDashboard) => state;
