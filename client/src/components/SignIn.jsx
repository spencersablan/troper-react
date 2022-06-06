import { GoogleLogin } from "@react-oauth/google";
import "./SignIn.scss";

export default function SignIn({ setUserData }) {
	const handleFailure = (result) => {
		console.log(result.details);
	};

	const handleLogin = async (googleData) => {
		const response = await fetch("/google/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				token: googleData.tokenId,
			}),
		});

		const data = await response.json();

		setUserData(data);
		localStorage.setItem("userData", JSON.stringify(data));
	};

	return (
		<div className="sign-in">
			<h3 className="sign-in--header">Login</h3>
			<GoogleLogin onError={handleFailure} onSuccess={handleLogin} />
		</div>
	);
}
