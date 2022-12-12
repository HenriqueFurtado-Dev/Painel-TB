
const cookieBox = document.querySelector("div.wrapper"),
acceptBtn = cookieBox.querySelector("button");

acceptBtn.onclick = ()=>{
    //Define o cookie para 1 mês, após isso ele expira automaticamente
    document.cookie = "CookieLGPD=THINKBEYOND; path=/; max-age="+60*60*24*30;
    if(document.cookie){ //if o cookie estiver configurado
    cookieBox.classList.add("hide"); //Esconde o pop-up
    }else{ //Caso o cookie não consiga ser ativado, exibir possivel erro
    alert("Não conseguimos configurar esse cookie! Por favor libere o acesso desse site nas configurações do seu navegador.");
    }
}
let checkCookie = document.cookie.indexOf("CookieLGPD=THINKBEYOND"); //checando o cookie
//Caso o cookie já esteja ativo, ele esconde o pop-up
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
