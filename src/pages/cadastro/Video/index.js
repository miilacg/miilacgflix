import React, { useEffect, useState } from 'react';
import PageDefault from '../../../componentes/PageDefault'
import { /*Link,*/ useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';
import videosRepositorio from '../../../repositorio/videos';
import categoriasRepositorio from '../../../repositorio/categorias';

function CadastroVideo(){
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoriasTitulos = categorias.map(({ titulo }) => titulo);
    const { trocaDadoVideo, valores } = useForm({
        titulo: '',
        descricao: '',
        url: '',
        categoria: '',
    });

    useEffect (() => {
        categoriasRepositorio
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            });        
    }, []); //nunca esquecer []

    return (        
        <PageDefault to={"/cadastro/categoria"} text={"Adicionar categoria"}>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit ={function trocaDadoVideo(event) {
                event.preventDefault();
                //alert('Video cadastrado com sucesso!!!');

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === valores.categoria; 
                });

                videosRepositorio.create({
                    titulo: valores.titulo,
                    url: valores.url,
                    descricao: valores.descricao,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        history.push('/'); //onde eu quero ir quando clicar
                    });
            }}>

                <FormField 
                    label = "Título do vídeo"
                    value = {valores.titulo}
                    name = "titulo"
                    onChange = {trocaDadoVideo}
                />
                <FormField 
                    label = "Descrição"
                    type = "textarea"
                    value = {valores.descricao}
                    name = "descricao"
                    onChange = {trocaDadoVideo}
                />
                <FormField 
                    label = "URL"
                    value = {valores.url}
                    name = "url"
                    onChange = {trocaDadoVideo}
                />
                <FormField 
                    label = "Categoria"
                    value = {valores.categoria}
                    name = "categoria"
                    onChange = {trocaDadoVideo}
                    sugestoes={categoriasTitulos}                    
                />

                <Button> Cadastrar </Button>                
            </form>
            <br/>
            {/*<Link to = "/cadastro/categoria">
                Cadastrar Categoria
            </Link>*/}
        </PageDefault>
    );
}

export default CadastroVideo;