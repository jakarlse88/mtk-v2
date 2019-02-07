/*
 * Components
 */
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./components/mainpage/MainPage";
import React, { Component } from "react";

/*
 * CSS
 */
import "bulma/css/bulma.css";

class App extends Component {
	render() {
		return (
			<Router>
				<>
					<Route
						path="/"
						component={Header}
					/>
					<Route
						exact
						path="/"
						component={MainPage}
					/>
					<Route
						path="/"
						component={Footer}
					/>
				</>
			</Router>
		);
	}
}

export default App;
