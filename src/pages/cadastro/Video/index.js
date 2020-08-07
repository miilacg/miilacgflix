import React, { useEffect, useState } from 'react';
import PageDefault from '../../../componentes/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hocks/useForm';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button'
import videosRepositorio from '../../../repositorio/videos'
import categoriasRepositorio from '../../../repositorio/categorias'

function CadastroVideo(){
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoriasTitulos = categorias.map(({ titulo }) => titulo);
    const { trocaDadoCategoria, valores } = useForm({
        titulo: '',
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
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit ={(event) => {
                event.preventDefault();
                //alert('Video cadastrado com sucesso!!!');

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === valores.categoria; 
                });

                videosRepositorio.create({
                    titulo: valores.titulo,
                    url: valores.url,
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
                    onChange = {trocaDadoCategoria}
                />

                <FormField 
                    label = "URL"
                    value = {valores.url}
                    name = "url"
                    onChange = {trocaDadoCategoria}
                />

                <FormField 
                    label = "Categoria"
                    value = {valores.categoria}
                    name = "categoria"
                    onChange = {trocaDadoCategoria}
                    sugestoes={categoriasTitulos}
                />

                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link to = "/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;