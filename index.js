import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router/lib";

import Layout from './pages/layout.js';
import Settings from './pages/settings.js';
import Todos from './pages/todos.js'
import Favorites from './pages/favorites.js'

const app = document.getElementById('app')

ReactDOM.render(
	<Router history = {hashHistory}>
		<Route path = "/" component={Layout}>
			<IndexRoute component = {Todos}></IndexRoute>
			<Route path="/favorites(/:article)" component = {Favorites}></Route>
			<Route path="/settings" component = {Settings}></Route>
		</Route>
	</Router>,
	 app);

