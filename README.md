# API Gerenciador de Podcasts

API REST desenvolvida em **TypeScript**, sem o uso de frameworks HTTP como Express ou Fastify. O servidor é criado diretamente com o módulo nativo `http` do Node.js.

O projeto centraliza episódios de podcasts em vídeo e permite listar todos os episódios ou filtrar os resultados pelo nome do podcast.

## Tecnologias

- Node.js
- TypeScript
- API HTTP nativa do Node.js
- Dados armazenados em JSON
- TSX para execução e desenvolvimento
- TSUP para geração da versão compilada

## Funcionalidades

- Listar todos os episódios cadastrados.
- Filtrar episódios pelo nome do podcast.
- Retornar os dados em formato JSON.
- Usar códigos HTTP diferentes para resultados encontrados e sem conteúdo.

## Pré-requisitos

- Node.js instalado
- npm

## Instalação e execução

1. Instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3636
```

3. Inicie o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

Para reiniciar automaticamente durante alterações:

```bash
npm run start:watch
```

A API ficará disponível em `http://localhost:3636`.

## Endpoints

### Listar episódios

```http
GET /api/list
```

Retorna todos os episódios.

Exemplo:

```bash
curl http://localhost:3636/api/list
```

### Filtrar episódios por podcast

```http
GET /api/episode?p={nome-do-podcast}
```

A pesquisa é feita pelo campo `podcastName`. Atualmente, a comparação considera o texto exatamente como cadastrado.

Exemplo:

```bash
curl "http://localhost:3636/api/episode?p=Flow"
```

## Respostas

| Situação | Status |
| --- | --- |
| Episódios encontrados | `200 OK` |
| Nenhum episódio encontrado | `204 No Content` |

Formato de um episódio:

```json
{
  "podcastName": "Flow",
  "episode": "CLÓVIS DE BARROS - Flow #665",
  "videoId": "nCcRHIunPvk",
  "category": ["mentalidade", "filosofia"]
}
```

Exemplo de resposta de sucesso:

```json
[
  {
    "podcastName": "Flow",
    "episode": "CLÓVIS DE BARROS - Flow #665",
    "videoId": "nCcRHIunPvk",
    "category": ["mentalidade", "filosofia"]
  }
]
```

## Estrutura do projeto

```text
src/
├── app.ts                       # Processamento das requisições
├── server.ts                    # Inicialização do servidor HTTP
├── controllers/                 # Respostas HTTP dos endpoints
├── models/                      # Contratos dos dados
├── repositories/                # Acesso aos dados em JSON
├── routes/                      # Caminhos da API
├── services/                    # Regras de negócio
└── utils/                       # Constantes HTTP
```

Fluxo das requisições:

```text
Cliente -> server -> app -> controller -> service -> repository -> JSON
```

Os dados são mantidos em `src/repositories/podcasts.json`.

## Build

Para gerar os arquivos compilados:

```bash
npm run dist
```
