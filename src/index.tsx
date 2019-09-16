import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import { Provider } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend';
import 'bootstrap';
import store from './redux/store';
import Home from './components/home';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}><DndProvider backend={HTML5Backend}><Home /></DndProvider></Provider>,
  document.getElementById('app')
);
