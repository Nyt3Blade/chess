import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const PORT = process.env.PORT || 8080;

const wss = new WebSocketServer({ port: Number(PORT) });
console.log(`WebSocket server is running on port ${PORT}`);

const gameManager = new GameManager();

wss.on('connection', function connection(ws) {
    console.log('New client connected from:');
    gameManager.addUser(ws);
    ws.on("close", () => {
        console.log('Client disconnected');
        gameManager.removeUser(ws)});
    ws.on("error", (error) => {
        console.error('WebSocket error:', error);
    });
});
