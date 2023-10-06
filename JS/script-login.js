let btnAdd = document.querySelector('#addBotao');

//criar um evento de click para o botão, que irá executar a função anonima

btnAdd.addEventListener("click", function(){
    let inputValor = document.querySelector('#meuInput').value;
    if(inputValor === ""){
        alert("Você não preencheu os campos em branco!")
    }else{
        //alert("Login realizado com sucesso!")

        document.querySelector("#mensagem-ok").insertAdjacentHTML(
            "afterend",
            `<div class="card-teste">
            <span>LOGIN efetuado com sucesso!</span>
            </div>
            `
        );

            let mensagem = document.querySelector('.card-teste');



        setTimeout(() => {mensagem.style.display="none";

        },3000);
    }

    document.querySelector('#meuInput').value = ""
    document.querySelector('#meuInputPassword').value = ""
    //zerou o input
});