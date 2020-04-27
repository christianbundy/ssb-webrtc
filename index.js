const SimplePeer = require("simple-peer");
const wrtc = require("wrtc");

module.exports = {
  name: "ssb-webrtc",
  version: "1.0.0",
  manifest: {
    signal: "sync",
  },
  init: (api) => ({
    signal: (offer, cb) => {
      const me = new SimplePeer({ wrtc });
      me.signal(offer);

      me.on("signal", (answer) => {
        if (cb != null) {
          const oldCb = cb;
          cb = null;
          oldCb(null, answer);
        }
      });

      me.on("connect", () => {
        me.send("thanks for reaching out!");
      });

      me.on("data", (data) => {
        console.log("server received:", data.toString());
      });
    },
  }),
};
