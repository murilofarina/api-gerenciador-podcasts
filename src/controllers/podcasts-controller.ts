import {IncomingMessage, ServerResponse} from "http";



export const getListEpisodes = async (
    req : IncomingMessage, 
    res: ServerResponse
) => {
    res.writeHead(200, {'Content-Type' : "application/json"}) // escreve um json no cabecalho da response 
    res.end({
        name: "Murilo",
    }); // escreve (json) no content (end) da response
}
