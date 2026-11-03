// lê o arquivo JSON e fornece os dados para quem precisar

import fs from "fs"; // file system, le e escreve em arquivos de sistema
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (

    podcastName?: string // parametro opcional

): Promise<PodcastModel[]> => {

    const language = "utf-8"

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData); // converte para JSON

    if(podcastName) { // filtra por nome passado pelo parametro opcional

        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.podcastName === podcastName
        );

    }

    return jsonFile;
}