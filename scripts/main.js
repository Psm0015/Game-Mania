////////////////////////////////
//FUNÇÃO DE VOLTAR PARA O TOPO//
////////////////////////////////

function voltartopo() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFuncao()};

function scrollFuncao() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
////////////////////
//FUNÇÃO DE LOGIN//
///////////////////

function login(){
    if($('#email').val() != "" & $('#password').val()){
        alertaSucesso("Sucesso ao fazer login")
    }else{
        alertaErro("Não foi possível fazer login")
    }
}