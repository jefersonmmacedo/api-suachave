import { server } from "./http";
import "./websocket"

const PORT = process.env.PORT || 9001;

server.listen(PORT, () => {
  console.log(`Server initialized! Access the link: http://localhost:${PORT}`);
  console.log(process.env.STRINGCONNECTION);
});