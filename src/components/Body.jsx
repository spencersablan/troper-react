import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Login from "./Login";
import "./Body.scss";

export default function Body() {
	return (
		<div className="body">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/student" element={<Student />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}
