import * as React from 'react';
import { connect } from 'react-redux'
import List from './List';
import { selectDashboard, selectDashboardListIds } from '../redux/selectors/dashboard'
import { State } from "../redux/reducers";

interface DashboardProps {
  name: string,
  lists: string[],
}

const renderList = (id: string) => <List key={id} id={id} />;

const Dashboard = (props: DashboardProps) => {
  const { name, lists } = props;

  return (
    <div className="dashboard">
      <h1>{name}</h1>
      <div className="row">
        {lists && lists.map(renderList)}
      </div>
    </div>
  );
};

export default connect(
  (state: State) => {
    const { name } = selectDashboard(state);

    return {
      name,
      lists: selectDashboardListIds(state),
    };
  }
)(Dashboard);
