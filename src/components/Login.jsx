import { signInWithGoogle } from "../utils/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import SvgGoogleIcon from "./SvgGoogleIcon";
import "./Login.scss";

export default function Login() {
	const { login } = useAuth();
	const navigate = useNavigate();

	const googleLogin = async () => {
		const result = await signInWithGoogle();
		login(result.user);
		navigate("/");
	};

	return (
		<div className="login">
			<h3 className="login--header">Login</h3>
			<button className="login--button" onClick={googleLogin}>
				<SvgGoogleIcon />
				<span>Sign in with Google</span>
			</button>
		</div>
	);
}
