# Podcast Manager

### Descrição
Aplicação no estilo Netflix, onde será possível centralizar diferentes episódios de podcasts separados por categoria.

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios de podcasts em sessões de categorias
    - [saúde, mentalidade, política, filosofia, humor, jogos, esporte]
- Filtrar episódios por nome de podcast

---

## Como

#### Feature:
Listar os episódios de podcasts em sessões de categorias

### Como vou implementar:
Vou retornar em uma API REST (json):
- Nome do podcast
- Nome do episódio
- Imagem de capa (cover)
- Link
- Categoria

```js
[
    {
        podcastName: "Flow",
        episode: "CLÓVIS DE BARROS - Flow #665",
        videoId: "nCcRHIunPvk",
        cover: "https://i.ytimg.com/vi/nCcRHIunPvk/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=nCcRHIunPvk",
        category: ["mentalidade, filosofia"]
    },
    {
        podcastName: "Flow",
        episode: "FELIPE MOURA BRASIL - Flow #658",
        videoId: "Wm2JVlqy2hE",
        cover: "https://i.ytimg.com/vi/Wm2JVlqy2hE/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=Wm2JVlqy2hE",
        category: ["política, mentalidade"]
    }
]
```
