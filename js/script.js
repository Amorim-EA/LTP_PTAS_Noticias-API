
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

class Noticia_Destaque{
 
  set_Atributos_Destaque( imagem , data , titulo , autor , resumo , url ){
    this.imagem = imagem;
    this.data = data;
    this.titulo = titulo;
    this.autor = autor; 
    this.resumo = resumo;
    this.url = url;
   }
   
  set_Noticia_Destaque(){
     
if( this.imagem == undefined || this.title == undefined || this.data == undefined || this.autor == undefined || this.resumo == undefined || this.url == undefined ){
  
  throw new Mensagem_Error( "Alguns dados na API json podem estar indefinidos" );
       
  }else{
       
 return `<div id="container-noticia_destaque">
          <center><img src="${this.imagem}" id="imagem_destaque"></center>
          <h3>${this.titulo}</h3>
          <h5>Publicado: ${this.data}</h1>
          <h5>Autor: ${this.autor}</h1>
          <p>${this.resumo}</p>
          <center><a href="${this.url}">Clique aqui para ver a noticia completa</a></center>
         </div>`;
  }   
}

 mostrar_Noticia_Destaque(){
   
 try{
     let id = document.getElementById("noticias");
     return id.insertAdjacentHTML( 'afterbegin' , this.set_Noticia_Destaque() );
    
    }catch(error){
   
     let id = document.getElementById("noticias");
     return id.insertAdjacentHTML( 'afterbegin' , error.get_Message() );
    
    }
  }
}


class Noticias{
    
set_Atributos( titulo , data , autor , resumo , url ){
  
  this.titulo = titulo;
  this.name = name;
  this.data = data;
  this.autor = autor;
  this.resumo = resumo;
  this.url = url;
  
}

setNoticias(){
  
  if( this.title == undefined || this.data == undefined || this.autor == undefined || this.resumo == undefined || this.url == undefined ){
    
    throw new Mensagem_Error( "Alguns dados podem estar indefinidos");
    
  }else{    
  return `<div id="container-noticias">
          <h3>${this.titulo}</h3>
          <h5>Publicado: ${this.data}</h1>
          <h5>Autor: ${this.autor}</h1>
          <p>${this.resumo}</p>
          <center><a href="${this.url}">Clique aqui para ver a noticia completa</a></center>
          </div>`;
  }
}

 mostrar_Noticias(){
  
try{
  
     let id = document.getElementById("container-noticia_destaque");
     return id.insertAdjacentHTML( 'afterend' , this.setNoticias() );
  
   }catch(error){
    
     let id = document.getElementById("noticias");
     return id.insertAdjacentHTML( 'beforeend' , error.get_Message() );
  
    }
  }
}


requisicao.onload = function(){
  var noticias = requisicao.response;
  
  let noticia_destaque = new Noticia_Destaque();
  let all_noticias = new Noticias();
  
    for(let i = 0 ; i <= noticias.articles.length ; i++){
       
        if( i == 2 ){
          noticia_destaque.set_Atributos_Destaque( noticias.articles[i].urlToImage, noticias.articles[i].publishedAt , noticias.articles[i].title , noticias.articles[i].author , noticias.articles[i].description , noticias.articles[i].url );
          noticia_destaque.mostrar_Noticia_Destaque();
   }
        
        if( i >= 3 ){
          all_noticias.set_Atributos( noticias.articles[i].title , noticias.articles[i].publishedAt , noticias.articles[i].author , noticias.articles[i].description , noticias.articles[i].url );
          all_noticias.mostrar_Noticias();
     }
  }
    
       
  }