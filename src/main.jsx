import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Privacy from "./Pages/Privacy/Privacy.jsx";
import Terms from "./Pages/Terms/Terms.jsx";
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}
		>
			<Route
				index={true}
				path="/"
				element={<Home />}
			/>
			<Route
				path="/privacy-policy"
				element={<Privacy />}
			/>
			<Route
				path="/termsandconditions"
				element={<Terms />}
			/>
		</Route>
	)
);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
