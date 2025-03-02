const express = require("express");
const cors = require("cors");
const customerRoutes = require("./routes/customer");
const verifyRoutes = require("./routes/verify");
const customerLoginRouter = require('./routes/login');
const app = express();
app.use(cors());
app.use(cors({ origin: '*' }));
app.use(express.json());

app.use("/api/customer", customerRoutes);
app.use("/api/verify", verifyRoutes);
app.use("/api/customer/login",customerLoginRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
