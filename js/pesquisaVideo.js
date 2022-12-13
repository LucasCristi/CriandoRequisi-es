import { conexaoApi } from "./conectaApi.js";
import constroiCardDeVideos from "./mostrarVideos.js";

async function buscarVideo(evento) {
  evento.preventDefault();

  const videoPesquisado = document.querySelector("[data-pesquisa]").value;
  const busca = await conexaoApi.buscaVideo(videoPesquisado);

  const lista = document.querySelector("[data-lista]");
  lista.innerHTML = "";
  busca.forEach(element => {
    lista.appendChild(
      constroiCardDeVideos(
        element.titulo,
        element.descricao,
        element.url,
        element.imagem
      )
    );
  });
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", (evento) => buscarVideo(evento));
