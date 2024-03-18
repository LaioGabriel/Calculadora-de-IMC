const form = document.querySelector('form');
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMsg = document.querySelector('.modal h2')
const closeBtn = document.querySelector('#close')




form.onsubmit = function(event){
event.preventDefault()
const weight = inputWeight.value
const height = inputHeight.value
const result = calcIMC(weight,height)
modalWrapper.classList.add('open')
if(result<17){
    modalMsg.innerText=`Seu IMC é de: ${result}
     seu quadro é de desnutrição, procure ajuda médica`;
}else if(result>17 && result<18.4){
    modalMsg.innerText=`Seu IMC é de: ${result}
     você está abaixo do peso`;
}else if(result>18.4 && result<25){
    modalMsg.innerText=`Seu IMC é de: ${result}
     seu peso está ideal, parabéns`;
}else if(result>25 && result<30){
    modalMsg.innerText=`Seu IMC é de: ${result}
     você está acima do peso`;
}else if(result>30 && result<35){
    modalMsg.innerText=`Seu IMC é de: ${result}, Seu quadro é de obesidade 1
     procure atendimento médico`;
  
}  else if(result>35&&result<=40){
    `Seu IMC é de: ${result}, Seu quadro é de obesidade 2
     procure atendimento médico`;
}else if(result>40){
    `Seu IMC é de: ${result}, Seu quadro é de obesidade 3
     procure atendimento médico urgente`;
  
}

}

function calcIMC(weight,height){
if(height>3){
    return(weight/ (height/100)**2).toFixed(2)
}else{
    alert('Insira o valor em centímetros')
}
        
   

}
closeBtn.onclick=()=>{
modalWrapper.classList.remove('open')
}