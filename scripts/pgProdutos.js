const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('prdid');
console.log(productId)
if(productId == null || productId == ""){
    window.location.href = "index.html"
}
produtos.forEach(prd => {
    if(prd.id == productId){
        let precoformatado = prd.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        $('#img').html(`<img src="${prd.imgPath}" class="img-fluid" alt="Produto">`)
        $('#nomeprd').html(prd.titulo)
        $('#precoprd').html(precoformatado)
    }
});