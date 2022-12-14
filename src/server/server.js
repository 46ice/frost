const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.get("/", (req, res) => { // simple route
  res.json({ message: "Welcome to bezkoder application." });
});




//sequelize
const db = require("../models");
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
  });

require("../router/frost.routes.js")(app);
require("../router/user.routes.js")(app);
require("../router/product.routes.js")(app);
require("../router/buy.routes.js")(app);
require("../router/chest.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


