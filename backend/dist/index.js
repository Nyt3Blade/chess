"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const PORT = process.env.PORT || 8080;
const wss = new ws_1.WebSocketServer({ port: Number(PORT) });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data) {
        console.log('Received: %s', data.toString());
    });
    ws.send('something');
});
