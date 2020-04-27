const ssbWebrtc = require("./");
const wrtc = require("wrtc");
const SimplePeer = require("simple-peer");

// Emulate Secret-Stack without the headaches.
const remoteApi = {};
remoteApi.webRtc = ssbWebrtc.init();

const peer = new SimplePeer({ initiator: true, wrtc });

const isOffer = (data) =>
  typeof data.type === "string" && data.type === "offer";

peer.on("signal", (data) => {
  if (isOffer(data)) {
    remoteApi.webRtc.signal(data, (err, answer) => {
      peer.signal(answer);
    });
  }
});

peer.on("connect", (data) => {
  peer.send("thanks for accepting my offer!");
});

peer.on("data", (data) => {
  console.log("peer received:", data.toString());
});
