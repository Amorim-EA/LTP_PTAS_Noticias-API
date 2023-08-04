
let requisicao_URL = "https://www.luizpicolo.com.br/api.json";
let requisicao = new XMLHttpRequest();
requisicao.open( "GET", requisicao_URL );
requisicao.responseType = "json";
requisicao.send();  