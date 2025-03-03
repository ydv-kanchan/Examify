const express = require("express");
const cors = require("cors");
const signupRouter = require("./routes/signup");
const verifyRoutes = require("./routes/verify");
const loginRouter = require('./routes/login');
const app = express();
app.use(cors());
app.use(cors({ origin: '*' }));
app.use(express.json());

app.use("/api/signup", signupRouter);
app.use("/api/verify", verifyRoutes);
app.use("/api/login",loginRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
