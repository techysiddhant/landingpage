import "./App.css";
import Privacy from "./Pages/Privacy/Privacy";
import Terms from "./Pages/Terms/Terms";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={<Home />}
			/>
			<Route
				exact
				path="/privacy-policy"
				element={<Privacy />}
			/>
			<Route
				exact
				path="/termsandconditions"
				element={<Terms />}
			/>
		</Routes>
	);
}

export default App;
