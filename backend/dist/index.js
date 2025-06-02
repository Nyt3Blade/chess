"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const GameManager_1 = require("./GameManager");
const PORT = process.env.PORT || 8080;
const wss = new ws_1.WebSocketServer({ port: Number(PORT) });
console.log(`WebSocket server is running on port ${PORT}`);
const gameManager = new GameManager_1.GameManager();
wss.on('connection', function connection(ws) {
    console.log('New client connected from:');
    gameManager.addUser(ws);
    ws.on("close", () => {
        console.log('Client disconnected');
        gameManager.removeUser(ws);
    });
    ws.on("error", (error) => {
        console.error('WebSocket error:', error);
    });
});
