exports.getUserData = (req, res) => {
	res.send({
		firstName: "J",
		lastName: "Herbie",
		prefix: "Mr.",
		id: 1234,
	});
};
