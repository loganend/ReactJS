import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router/lib";

// import Bootstrap from "./vendor/bootstrap-without-jquery";

import Layout from './pages/layout.js';
import Featured from './pages/featured.js';
import Archives from './pages/archives.js';
import Settings from './pages/settings.js';

const app = document.getElementById('app')

ReactDOM.render(
	<Router history = {hashHistory}>
		<Route path = "/" component={Layout}>
			<IndexRoute component = {Featured}></IndexRoute>
			<Route path="/archives(/:article)" component = {Archives}></Route>
			<Route path="/settings" component = {Settings}></Route>
		</Route>
	</Router>,
	 app);

