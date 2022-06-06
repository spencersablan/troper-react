const express = require("express");
const userRouter = require("./routes/user");

// Init DB
require("./db/mongoose");

const PORT = process.env.PORT || 5000;

const app = express();

// Routes
app.use(userRouter);

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
