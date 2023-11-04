function cadastrar(){
    if($('#nome').val() != "" & $('#email').val() != "" & $('#password').val() != ""){
        alertaSucesso("Cadastrado com sucesso")
    }else{
        alertaErro("Não foi possível fazer seu cadastro")
    }
}