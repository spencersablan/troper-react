import { useAuth } from "../contexts/AuthContext";

export default function HeaderUser() {
	const { currentUser } = useAuth();

	if (currentUser !== {}) {
		// const userFullName = name || "eh";
		// const userInitials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

		const profileImageStyles = {
			backgroundImage: `url(${currentUser.photoURL})`,
		};

		return (
			<div className="header--user">
				<div className="header--user--circle" style={profileImageStyles}></div>
				<h5 className="header--user--name">{currentUser.displayName}</h5>
			</div>
		);
	}
}
