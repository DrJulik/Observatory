import React from "react";
import "./App.css";
import Grid from "./components/Grid";
import { Provider } from "./context";

function App() {
	return (
		<Provider>
			<div className="App">
				<Grid />
			</div>
		</Provider>
	);
}

export default App;
