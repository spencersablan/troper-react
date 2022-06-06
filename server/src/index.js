const express = require("express");
const userRouter = require("./routes/user");

// Init DB
require("./db/mongoose");

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
