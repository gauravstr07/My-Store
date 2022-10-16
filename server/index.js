const express = require("express");
require("./config");
const productRoute = require("./api/routes/product");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
const port = 5000;

// Routes
app.use("/products", productRoute);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", (req, res, next) => {
  res.status(200).json({
    message: `Server running on port: ${port}📡`,
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    error: "Page not found",
  });
});

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
