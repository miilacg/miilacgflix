import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAll(){
    return fetch(`${URL_CATEGORIAS}`) //busca os dados
        .then(async(respostaServidor) =>  { 
            //verificar se o servidor está funcionado
            if (respostaServidor.ok) { 
                const resposta = await respostaServidor.json();
                return resposta;
            }    
            //em projetos maiores e melhor pegar o erro que ta vindo da api pra decidir a melhor forma de tratar
            //pegar o await e olhar o que ta acontecendo
            throw new Error('Não foi possível pegar os dados :(');
        });
}

function getAllWithVideos(){
    return fetch(`${URL_CATEGORIAS}?_embed=videos`) //busca os dados
        .then(async(respostaServidor) =>  { 
            //verificar se o servidor está funcionado
            if (respostaServidor.ok) { 
                const resposta = await respostaServidor.json();
                return resposta;
            }    
            //em projetos maiores e melhor pegar o erro que ta vindo da api pra decidir a melhor forma de tratar
            //pegar o await e olhar o que ta acontecendo
            throw new Error('Não foi possível pegar os dados :(');
        });
}

export default {
    getAllWithVideos, 
    getAll,
};