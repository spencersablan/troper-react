exports.googleLogin = async (req, res) => {
	const { token } = req.body;

	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: process.env.GOOGLE_CLIENT_ID,
	});

	const { name } = ticket.getPayload();
	res.status(201).json({ name });
};
