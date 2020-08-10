import React, { useEffect,  useState } from 'react';
import BannerMain from './../../componentes/BannerMain';
import Carousel from './../../componentes/Carousel';
import categoriasRepositorio from '../../repositorio/categorias'
import PageDefault from '../../componentes/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepositorio.getAllWithVideos()  
      .then((categoriasComVideos) => {

        setDadosIniciais(categoriasComVideos);
      })
      //tratar pra mostrar o erro pro usuário
      .catch((err) => {
        console.log(err.message); //mostrar o erro no console
      });        
  }, []); //o [] é pra não ficar rodando varias vezes. não ficar fazendo varias requisições (request) pro back
 
  return (
    <PageDefault paddingAll={0} to={"/cadastro/video"} text={"Adicionar vídeo"}>  
      {dadosIniciais.length === 0  && (<div>Carregando...</div>)}
      
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) { //se for o primeiro item (item 0)
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                /*videoDescription= ""*/
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        //a partir da segunda categoria
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}


      {/*<Carousel 
        category = {dadosIniciais.categorias[1]}
      />

      <Carousel 
        category = {dadosIniciais.categorias[2]}
      />

      <Carousel 
        category = {dadosIniciais.categorias[3]}
      />

      <Carousel 
        category = {dadosIniciais.categorias[4]}
      />*/}

    </PageDefault>
  );
}

export default Home;
