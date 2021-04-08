const express = require("express");

const app = express();
const server = require("http").Server(app);

const PORT = 3666;

app.use(express.static("./jogo-web"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
