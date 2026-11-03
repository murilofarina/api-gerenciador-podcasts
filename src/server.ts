import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'; // conecta o controller com o server
import { Routes } from "./routes/routes";

const server = http.createServer(

    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        
        const [ baseUrl, queryString ] = req.url?.split("?") ?? ["", ""];   // queryString: consulta em texto

        if(req.method === "GET" && baseUrl === Routes.LIST) {               // listar podcasts com rota
            await getListEpisodes(req, res);
        }

        if(req.method === "GET" && baseUrl === Routes.EPISODE) {            // filtrar podcasts com rota
            await getFilterEpisodes(req, res);
        }
    }
);

const port = process.env.PORT;

server.listen(port, () => {

    console.log(`Servidor iniciado na porta ${port}`);

});