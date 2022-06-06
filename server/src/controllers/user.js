const User = require("../models/user");

// Get user data
exports.getUserData = (req, res) => {
	res.send({
		firstName: "J",
		lastName: "Herbie",
		prefix: "Mr.",
		id: 1234,
	});
};

// New user
exports.createUser = async (req, res) => {
	const { firstName, lastName, prefix, id } = req.body;
	const user = new User({
		firstName,
		lastName,
		prefix,
		id,
	});

	try {
		const newUser = await user.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
