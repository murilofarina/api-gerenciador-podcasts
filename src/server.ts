import * as http from "http";

const server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.end("Olá, mundo!");
    }
);

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});