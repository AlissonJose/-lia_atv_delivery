//script para favoritar o coração
let coracao = document.querySelector(".bi-heart-fill");
coracao.addEventListener('click', function(event){
    if(event.target.nodeName === "I"){
        event.target.classList.toggle("red");
    }
})


//script para incrementar e decrementar o número de produtos
let decrementar = document.querySelector(".bi-dash-square");
let incrementar = document.querySelector("bi-plus-square");
let textoProduto = document.querySelector(".numero-produto");
let quantidadeProduto = parseInt(textoProduto.textContent);

incrementar.addEventListener("click", function(){
    quantidadeProduto++;
    textoProduto.innerHTML = quantidadeProduto;
});

decrementar.addEventListener("click", function(){
    if(quantidadeProduto<=1){
        alert("A quantidade de produto não pode ser menor que 1.")
    }else{
        quantidadeProduto--;
        textoProduto.innerHTML = quantidadeProduto;
    }
})