import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import "./Home.scss";

export default function Home() {
	const [students, setStudents] = useState([
		{
			id: 1,
			name: "Khalil Mack",
		},
		{
			id: 2,
			name: "Keenan Allen",
		},
		{
			id: 3,
			name: "Joey Bosa",
		},
		{
			id: 4,
			name: "Matt Overton",
		},
		{
			id: 5,
			name: "Mike Williams",
		},
	]);

	const { currentUser } = useAuth();

	return (
		<div className="home">
			<h2 className="home--greeting">Hello, {currentUser.displayName}</h2>
			<div className="home--students">
				<h4 className="home--students--header">Students</h4>
				<div className="home--students--list">
					{students.map((student) => {
						return (
							<a key={student.id} className="home--students--student">
								{student.name}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}
