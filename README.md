# SSB-WebRTC

Direct connections are good! This module implements a SecretStack plugin that
lets you take a MuxRPC session and negotiate a WebRTC session. Right now it
only publishes some unencrypted text between the two peers to ensure that it's
working correctly, but in the future maybe it'll start an encrypted MuxRPC
session between your peers.

My hope is that this will pair well with strategies like SSB-Room, which can
connect two peers through a tunnel (like a VPN). Once you're connected through
SSB-Room, maybe peers can call `webrtc.signal()` over MuxRPC and connect
directly (without the room)? One way to find out!

## License

AGPL-3.0
