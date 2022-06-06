export default function HeaderUser({ userData }) {
	const { firstName, lastName } = userData;

	const userFullName = `${firstName} ${lastName}`;
	const userInitials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

	return (
		<div className="header--user">
			<div className="header--user--circle">
				<span className="header--user--initials">{userInitials}</span>
			</div>
			<h5 className="header--user--name">{userFullName}</h5>
		</div>
	);
}
