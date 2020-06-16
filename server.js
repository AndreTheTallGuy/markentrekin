const express = require("express");
const compression = require("compression");
const app = express();
const PORT = process.env.PORT || 8080;
const connectDB = require("./config/db");

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(express.static("public"));

require("./routes/HTMLroutes")(app);
const apiRoutes = require("./routes/APIroutes");
app.use("/api", apiRoutes);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
