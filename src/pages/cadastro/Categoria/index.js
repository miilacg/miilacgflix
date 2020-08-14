import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepositorio from '../../../repositorio/categorias';

function CadastroCategoria(){
    const history = useHistory();
    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: '',
        corLetra: '',
    }

    const { trocaDadoCategoria, valores } = useForm({ valoresIniciais });
    //useState tem um valor e uma função
    const [categorias, setCategorias] = useState([]);       
    
    //chama quando quer que algum efeito colateral aconteça
    useEffect(() => {
        const URL = window.location.hostname.includes('localhost') //variavel toda em maiusculo eh pq ela não muda
         ? 'http://localhost:8080/categorias'
         : 'https://miilacgflix.herokuapp.com/categorias';
        fetch(URL) //busca os dados
            .then(async(respostaServidor) =>  { 
                const resposta = await respostaServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            });

        /*setTimeout(() => {
            setCategorias([
                ...categorias, //colocando todas as categorias que eu já tenho de base
                {
                    "id": 1,
                    "nome": "Front End",
                    "descricao": "Uma categoria top",
                    "cor": "#cbd1ff"
                },
                {
                    "id": 2,
                    "nome": "Back End",
                    "descricao": "Uma categoria top",
                    "cor": "#cbd1ff"
                },
            ]);  
        }, 4 * 1000); *///em segundos
    },[]);

    return (
        <PageDefault to={"/cadastro/video"} text={"Adicionar vídeo"}>
            <h1>Cadastro de Categoria: {valores.titulo}</h1>
           
            <form onSubmit = {function trocaDadoCategoria(infosDoEvento) {
                infosDoEvento.preventDefault();        
               
                categoriasRepositorio.creat({
                    titulo: valores.titulo,
                    descricao: valores.descricao,
                    cor: valores.cor,
                    corLetra: valores.corLetra,
                })
                    .then(() => {
                        history.push('/cadastro/Video'); //onde eu quero ir quando clicar
                    });      
            }}>
                <FormField 
                    label = "Nome da categoria"
                    type = "text"
                    value = {valores.titulo}
                    name = "titulo"
                    onChange = {trocaDadoCategoria}
                />
                <FormField 
                    label = "Descrição"
                    type = "textarea"
                    value = {valores.descricao}
                    name = "descricao"
                    onChange = {trocaDadoCategoria}
                />
                <FormField 
                    label = "Cor"
                    type = "color"
                    value = {valores.cor} 
                    name = "cor"
                    onChange = {trocaDadoCategoria}
                />
                <FormField 
                    label = "Cor da letra"
                    type = "color"
                    value = {valores.corLetra} 
                    name = "corLetra"
                    onChange = {trocaDadoCategoria}
                />
                
                <Button> Cadastrar </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Carregando...
                </div>
            )}
            
            <ul>
                <br/>
                <h3>Categorias já cadastradas</h3>
                {categorias.map((categoria) => {
                    return(/*concatenação de duas coisas. muito usado quando pode ter dados iguais*/
                        <li key = {`${categoria.titulo}`}> {/*precisa ter uma key unica*/}
                            {categoria.titulo}
                        </li>
                    )
                })}
            </ul>
            <br/>

            {/*<Link to = "/">
                Ir para Home
            </Link>*/}
        </PageDefault>
    );
}

export default CadastroCategoria;