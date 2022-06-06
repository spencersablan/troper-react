const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: { type: String, required: true },
	prefix: { type: String, required: true },
	id: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);
