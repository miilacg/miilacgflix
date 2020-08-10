import { useState } from 'react';

//tem que colocar sempre use no começo pra ele usar
function useForm (valoresIniciais){
    const [valores, setValores] = useState(valoresIniciais); 

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

    function clearForm(){
        setValores(valoresIniciais);
    }

    return {
        valores,
        trocaDadoCategoria,
        clearForm,
    };
}

export default useForm;