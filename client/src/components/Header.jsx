import HeaderUser from "./HeaderUser";
import "./Header.scss";

export default function Header({ userData }) {
	return (
		<header className="header">
			<h1 className="logo">.troper</h1>
			<HeaderUser userData={userData} />
		</header>
	);
}
