import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./UtilProtectedRoute";
import Home from "./Home";
import Student from "./Student";
import Login from "./Login";
import "./Body.scss";

export default function Body() {
	return (
		<div className="body">
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/student"
						element={
							<ProtectedRoute>
								<Student />
							</ProtectedRoute>
						}
					/>
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}
