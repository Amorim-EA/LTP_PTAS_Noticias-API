
let requisicao_URL = "https://www.luizpicolo.com.br/api.json";
let requisicao = new XMLHttpRequest();
requisicao.open( "GET", requisicao_URL );
requisicao.responseType = "json";
requisicao.send();  

class Mensagem_Error extends Error{
  constructor( message ){
    super( message )
    this.name =  "Error Message: ";
  }
  
  get_Message(){
    
        return `<div id="container-noticias">
                <h2>${this.name}</h2>
                <p>${this.message}</p>
                </div>`;
    
  }
}