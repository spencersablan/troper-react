import { signInWithGoogle } from "../utils/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export default function Login() {
	const { login } = useAuth();
	const navigate = useNavigate();

	const googleLogin = async () => {
		const result = await signInWithGoogle();

		console.log(result.user);
		login(result.user);
		navigate("/");
	};

	return (
		<div className="sign-in">
			<h3 className="sign-in--header">Login</h3>
			<button onClick={googleLogin}>Sign In with Google</button>
		</div>
	);
}
