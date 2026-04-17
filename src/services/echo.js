import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { WsKey } from "src/pages/constantes/data";

// 🔥 obligatoire
window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: "reverb",
  key: WsKey,

  wsHost: "127.0.0.1",
  wsPort: 8080,
  forceTLS: false,
  enabledTransports: ["ws"],
});

export default echo;
