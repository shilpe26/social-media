import React from "react";
import { useTheme } from "../Context/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";
import { useAuthFunctions } from "../Context/useAuthFunctions";

function Navbar() {
	const { theme, themeHandler } = useTheme();
	const token = localStorage.getItem("userToken");
	const { logout } = useAuthFunctions();
	return (
		<div>
			<nav className="container-note px-12 flex justify-between">
				<h1>Social media app</h1>
				<div className="nav-btn-links">
					{!token ? (
						<Link to="/login" className="mx-4">
							<button
								className={`btn login-btn ${theme.isLight ? "dark" : "light"}`}
							>
								Login
							</button>
						</Link>
					) : (
						<button
							onClick={logout}
							className={`btn login-btn ${theme.isLight ? "dark" : "light"}`}
						>
							Logout
						</button>
					)}
				</div>
				<button
					style={{ color: theme.mode.textColor }}
					className="btn-theme text-xmd md:text-xl"
					onClick={themeHandler}
				>
					<FontAwesomeIcon icon={theme.isLight ? faSun : faMoon} />
				</button>
			</nav>
		</div>
	);
}

export { Navbar };
