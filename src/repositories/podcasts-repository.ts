// lê o arquivo JSON e fornece os dados para quem precisar

import fs from "fs"; // file system, le e escreve em arquivos de sistema
import path from "path";
import { Podcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    const jsonFile = JSON.parse(rawData); // converte para JSON
    return jsonFile;
}