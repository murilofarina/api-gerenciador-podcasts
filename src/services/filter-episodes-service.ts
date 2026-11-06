import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";



export const serviceFilterEpisodes = async (

    podcastName: string | undefined
    
): Promise<FilterPodcastModel> => {

    // define a interface de retorno
    let responseFormat : FilterPodcastModel = {
        statusCode: 0,
        body: [],        
    }

    // busca os dados
    const queryString = podcastName?.split("?p=")[1] || "";        // pega a queryString, pos 1
    const data = await repositoryPodcast(queryString);

    // verifica se tem conteudo
    responseFormat.statusCode = 
        data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    return responseFormat;
}