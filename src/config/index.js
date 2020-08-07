const URL_BACKEND = window.location.hostname.includes('localhost') //variavel toda em maiusculo eh pq ela não muda
    ? 'http://localhost:8080'
    : 'https://miilacgflix.herokuapp.com';

//como tem so uma coisa tem que ser export default
export default {
    URL_BACKEND
};