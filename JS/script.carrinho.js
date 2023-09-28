let modal = document.querySelectorAll(".produtos-carrinho");
let excluir = document.querySelectorAll(".bi-trash");

for(let i =0; i < excluir.length; i++){
    for(let i =0; i < modal.length; i++){
    excluir[i].addEventListener("click", function(event){
        if(!event.target.classList.contains(".bi-trash")){
            modal[i].remove();
        }

});

};
};

//Professora o funcionamento do JS não estar dando certo aqui no meu projeto. Já renomei as variáveis/tags e mesmo assim não funcionou//.

