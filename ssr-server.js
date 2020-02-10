const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const path = require("path");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(cors());
    server.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use("/api", routes);

    server.get("*", (req, res) => {
      return handle(req, res)
  })

    const port = process.env.PORT || 5004;
    server.listen(port, () => {
      console.log("Server listening at port " + port);
    });
  })

  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
