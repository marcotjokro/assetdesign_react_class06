import React from 'react';

import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combine from './redux/combine';

import Main from './comps/Main';

const store = createStore(
	combine,
	applyMiddleware(
		Thunk
	)
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
				<Main />
			</Provider>
    );
  }
}
