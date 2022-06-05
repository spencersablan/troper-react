const express = require("express");
const userRouter = require("./routes/user");
const PORT = process.env.PORT || 3001;

const app = express();

// Routes
app.use(userRouter);

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
