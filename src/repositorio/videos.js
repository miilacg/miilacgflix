import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo){
    //fetch busca os dados, POST envia dados
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST', 
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo), //converte para texto para rede conseguir entender
    }) 
        .then(async(respostaServidor) =>  { 
            //verificar se o servidor está funcionado
            if (respostaServidor.ok) { 
                const resposta = await respostaServidor.json();
                return resposta;
            }    
            //em projetos maiores e melhor pegar o erro que ta vindo da api pra decidir a melhor forma de tratar
            //pegar o await e olhar o que ta acontecendo
            throw new Error('Não foi possível cadastrar os dados :(');
        });
}

export default {
    create, 
};