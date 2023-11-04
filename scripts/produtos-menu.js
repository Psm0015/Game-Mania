/////////////////////////////
// FUNÇÕES DE PREENCHIMENTO//
/////////////////////////////
document.addEventListener('DOMContentLoaded', (event) => {
    $('#sessao-produtos1').html(produtos1())
    $('#sessao-produtos2').html(produtos2())
  });
////////////////////////////
// FUNÇÃO DE MOSTRAR SENHA//
////////////////////////////
document.addEventListener('DOMContentLoaded', (event) => {
    const showPasswordCheckbox = document.getElementById('showPassword');
    const passwordInput = document.getElementById('password');
  
    showPasswordCheckbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    });
  });

//////////////////////////////////////////////////////
// FUNÇÃO DE PREENCHER A PRIMEIRA SESSÃO DE PRODUTOS//
//////////////////////////////////////////////////////
function produtos1() {
    var produtosSessao1 = ""
    min_prd = 1
    max_prd = 12
    for (let i = min_prd-1; i < max_prd; i++) {
        
        if (i%4 == 0 && i!=0) {
            produtosSessao1 += 
`</div>
<div class="row"> `
        }else if(i%4 == 0){
            produtosSessao1 += 
`<div class="row">`
        }
        let valorFormatado = produtos[i].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        produto = `
        <div onclick="paginaPrd(${produtos[i].id})" class="col-md-3 mb-4">
            <div class="card produto">
                <img src="${produtos[i].imgPath}" class="card-img-top" alt="Produto ${produtos[i].id}">
                <div class="card-body">
                    <p class="card-text">${produtos[i].titulo}</p>
                    <p class="preco">${valorFormatado}</p>
                </div>
            </div>
        </div>
        `
        produtosSessao1 += produto
        if(i == (max_prd)-1){
            produtosSessao1 += 
`</div>`
        }
    }
    
    return produtosSessao1;
}
//////////////////////////////////////////////////////
// FUNÇÃO DE PREENCHER A SEGUNDA SESSÃO DE PRODUTOS//
//////////////////////////////////////////////////////
function produtos2() {
    var produtosSessao2 = ""
    min_prd = 13
    max_prd = 24
    for (let i = min_prd-1; i < max_prd; i++) {
        
        if (i%4 == 0 && i!=0) {
            produtosSessao2 += 
`</div>
<div class="row"> `
        }else if(i%4 == 0){
            produtosSessao2 += 
`<div class="row">`
        }
        let valorFormatado = produtos[i].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        produto = `
        <div class="col-md-3 mb-4">
            <div onclick="paginaPrd(${produtos[i].id})" class="card produto">
                <img src="${produtos[i].imgPath}" class="card-img-top" alt="Produto ${produtos[i].id}">
                <div class="card-body d-flex flex-column justify-content-between">
                    <p class="card-text">${produtos[i].titulo}</p>
                    <p class="preco">${valorFormatado}</p>
                </div>
            </div>
        </div>
        `
        produtosSessao2 += produto
        if(i == (max_prd)-1){
            produtosSessao2 += 
`</div>`
        }
    }
    
    return produtosSessao2;
}
function paginaPrd(id){
    window.location.href = "/produto.html?prdid="+id
}