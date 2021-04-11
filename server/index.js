const express = require("express");

const app = express();
const server = require("http").Server(app);

const PORT = 3666;

app.use(express.static("./"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));

 // Sinalização de áudio: oferta
  socket.on("offer", (socketId, description) => {
    socket.to(socketId).emit("offer", socket.id, description);
  });

  // Sinalização de áudio: atendimento da oferta
  socket.on("answer", (socketId, description) => {
    socket.to(socketId).emit("answer", description);
  });

  // Sinalização de áudio: envio dos candidatos de caminho
  socket.on("candidate", (socketId, signal) => {
    socket.to(socketId).emit("candidate", signal);
  });

