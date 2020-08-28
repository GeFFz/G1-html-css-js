function abrirFace (){
    
    window.open("https://www.facebook.com/");
}
    
function abrirTwitter (){
    
    window.open("https://twitter.com/");

}

function abrirWhatsapp (){
    
    window.open("https://web.whatsapp.com/");
}

function abrirLinkedin (){
    
    window.open("https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fg1.globo.com%2Fsp%2Fcampinas-regiao%2Fespecial-publicitario%2Facic%2Fnoticia%2F2020%2F06%2F10%2Feducacao-a-distancia-e-sua-importancia-nos-ultimos-anos.ghtml");
}

function abrirPinterest (){
    
    window.open("https://br.pinterest.com/pin/create/button/?url=https%3A%2F%2Fg1.globo.com%2Fsp%2Fcampinas-regiao%2Fespecial-publicitario%2Facic%2Fnoticia%2F2020%2F06%2F10%2Feducacao-a-distancia-e-sua-importancia-nos-ultimos-anos.ghtml&description=Educa%C3%A7%C3%A3o%20a%20dist%C3%A2ncia%20e%20sua%20import%C3%A2ncia%20nos%20%C3%BAltimos%20anos%20%7C%20Especial%20Publicit%C3%A1rio%20-%20ACIC%20%7C%20G1&media=");
}

const inputEle = document.getElementById('enter');
inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { 

    texto = ("https://g1.globo.com/busca/?q="+this.value);
    window.open(texto);
    

  }
});

function abrirG1 (){

    console.log("Teste");    
    window.location.href=''














