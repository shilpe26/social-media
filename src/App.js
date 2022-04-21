import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "./react-router-dom";
import { Login, Signup, Home } from "./pages/Pages";
import { Navbar, Footer, PageNotFound } from "./components/Components";
function App() {
	return (
		<div className="App">
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
