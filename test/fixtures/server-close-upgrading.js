const { ClientSocket, listen } = require("../common");

const engine = listen(port => {
  const socket = new ClientSocket("ws://localhost:" + port);
  socket.on("upgrading", () => {
    engine.httpServer.close();
    engine.close();
  });
});
