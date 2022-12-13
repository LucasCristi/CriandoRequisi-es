async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.json();
  //   console.log(conexaoConvertida);
  return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações `,
      url: url,
      imagem: imagem,
    }),
  });
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function buscaVideo (videoPesquisado){
  const conexao = await fetch(`http://localhost:3000/videos?q=${videoPesquisado} `)
  const conexaoConvertida = conexao.json()

  return conexaoConvertida
}

export const conexaoApi = {
  listaVideos,
  criaVideo,
  buscaVideo
};
