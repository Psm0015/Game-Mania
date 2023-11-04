function cadastrar(){
    if($('#nome').val() != "" & $('#email').val() != "" & $('#senha').val() != ""){
        alertaSucesso("Cadastrado com sucesso")
    }else{
        alertaErro("Não foi possível fazer seu cadastro")
    }
}