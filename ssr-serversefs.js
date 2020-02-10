// const express = require("express");
// const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();
// const routes = require("./routes.js")

// app.prepare()
// .then(() => {
//     const server = express();
    server.get("*", (req, res) => {
        return handle(req, res)
    })

//     server.use("/api", routes);

//     server.listen(5004, (err) => {
//         if(err) throw err;
//         console.log("Server listening on port 5004");
//     })
// })

// .catch((ex) => {
//     console.error(ex.stack)
//     process.exit(1)
// })