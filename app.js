const inputValue = document.querySelector(".textbox");



const liste=document.querySelector(".liste")

const button = document.querySelector("button");




button.addEventListener("click",function(){

    liste.innerHTML+=` <li style="color: red;">Dairenin alani : ${(inputValue.value)**2*Math.PI}</li>`
    liste.innerHTML+=` <li style="color: red;">Dairenin cevresi : ${(inputValue.value)*2*Math.PI}</li>`

    




}
) 




