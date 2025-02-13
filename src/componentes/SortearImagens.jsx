import React, { useState } from 'react';
import "./SortearImagens.css"

const SortearImagens = () => {
  const imagens = [
    "/peixe.png",
    "/arvore.png",
    "/tigre.png",
    "/sol.png",
    "/nuvem.png",
    "/lagoa.png",
    "/planeta.png",
    "/navio.png",
    "/casa.png",
  ];

  const [imagemSorteada, setImagemSorteada] = useState('');

  const sortearImagem = () => {
    const indiceAleatorio = Math.floor(Math.random() * imagens.length);
    setImagemSorteada(imagens[indiceAleatorio]);
  };

  return (
    <div className='container-img' >
    <button onClick={sortearImagem}> 
      {imagemSorteada && <img src={imagemSorteada} alt="Imagem Sorteada" />}
      <h4>clique aqui</h4>
      </button>
    </div>
  );
};

export default SortearImagens;

