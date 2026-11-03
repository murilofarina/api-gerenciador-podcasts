import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'; // conecta o controller com o server

const server = http.createServer(

    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        // queryString: consulta em texto
        
        const [ baseUrl, queryString ] = req.url?.split("?") ?? ["", ""];

        console.log(baseUrl);
        console.log(queryString);

        // listar podcasts com rota
        if(req.method === "GET" && baseUrl === "/api/list") {
            await getListEpisodes(req, res);
        }

        // filtrar podcasts com rota
        if(req.method === "GET" && baseUrl === "/api/episode") {
            await getFilterEpisodes(req, res);
        }

    }

);

const port = process.env.PORT;

server.listen(port, () => {

    console.log(`Servidor iniciado na porta ${port}`);

});