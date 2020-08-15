import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';

function CadastroCategoria(){
    const valoresIniciais={
        nome: '',
        descricao: '',
        cor: '',
    }

    //useState tem um valor e uma função
    const [categorias, setCategorias] = useState([]);   
    const [valores, setValores] = useState(valoresIniciais); /*bolos é a categoria inicial*/
    
    function setValor(chave, valor){
        //chave é um valor variavel
        setValores ({
            ...valores,
            [chave]: valor, //nome: 'valor'
        })
    }

    function trocaDadoCategoria(infosDoEvento) {
        //const {getAttribute, value} = infosDoEvento.target;
        setValor(
            infosDoEvento.target.getAttribute('name'), //getAttribute('name'),
            infosDoEvento.target.value //value
        );
    }

    //chama quando quer que algum efeito colateral aconteça
    useEffect(() => {
        const url = 'http://localhost:8080/categorias';
        fetch(url) //busca os dados
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
    },[ ]);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>

            <form onSubmit = {function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias, //colocando todas as categorias que eu já tenho de base
                    valores,
                ]);   
                setValores(valoresIniciais) //se colocar um objeto vazio o react reclama            
            }}>
                <FormField 
                    label = "Nome da categoria"
                    type = "text"
                    value = {valores.nome}
                    name = "nome"
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
                
                <Button> Cadastrar </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Carregando...
                </div>
            )}
            
            <ul>
                {categorias.map((categoria, indice) => {
                    return(/*concatenação de duas coisas. muito usado quando pode ter dados iguais*/
                        <li key = {`${categoria.nome}`}> {/*precisa ter uma key unica*/}
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
            <Link to = "/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;