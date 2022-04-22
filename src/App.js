import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./Context/theme-context";
import { Login, Signup, Home } from "./pages/Pages";
import { Navbar, Footer, PageNotFound } from "./components/Components";
import "./stylesheets/utility.css";

function App() {
	const { theme } = useTheme();

	return (
		<div
			className="App flex flex-col min-h-screen"
			style={{
				backgroundColor: theme.mode.bgColor,
				color: theme.mode.textColor,
			}}
		>
			<div>
				<Navbar />
			</div>
			<div className="main-style grow">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/mock" element={<Mockman />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
