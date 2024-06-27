const emailInput=document.querySelector(".email-container input")
const labelEmail=document.querySelector(".email-container label")
const fristNameInput=document.querySelector(".frist-name input")
const fristNameLabel=document.querySelector(".frist-name label")
const lastNameInput=document.querySelector(".last-name input")
const lastNameLabel=document.querySelector(".last-name label")
const startInput=document.querySelector(".start-typing input")
const startLabel=document.querySelector(".start-typing label")
const submit=document.querySelector(".submit-two input")
const inputs=document.querySelectorAll(".information-container input")
inputs.forEach((data)=>data.addEventListener("input",()=>{
    if (emailInput.value!=="" && fristNameInput.value!=="" && lastNameInput.value!=="" && startInput.value!=="") {
        submit.style.backgroundColor="#0e0e0e"
        submit.style.cursor="pointer"

    }else{
        submit.style.backgroundColor="#0e0e0e91"
        submit.style.cursor="auto"

    }
}))








emailInput.addEventListener("input",()=>{
    if(emailInput.value!==""){
        labelEmail.style.top="10px"
        labelEmail.style.fontSize=".7rem"
      }
       
      if(emailInput.value==""){
       labelEmail.style.top="19px"
        labelEmail.style.fontSize="1rem"
      }

})
fristNameInput.addEventListener("input",()=>{
    if(fristNameInput.value!==""){
        fristNameLabel.style.top="10px"
        fristNameLabel.style.fontSize=".7rem"
      }
       
      if(fristNameInput.value==""){
       fristNameLabel.style.top="19px"
        fristNameLabel.style.fontSize="1rem"
      }

})
lastNameInput.addEventListener("input",()=>{
    if(lastNameInput.value!==""){
        lastNameLabel.style.top="10px"
        lastNameLabel.style.fontSize=".7rem"
      }
       
      if(lastNameInput.value==""){
      lastNameLabel.style.top="19px"
        lastNameLabel.style.fontSize="1rem"
      }

})
startInput.addEventListener("input",()=>{
    if(startInput.value!==""){
        startLabel.style.top="10px"
        startLabel.style.fontSize=".7rem"
      }
       
      if(startInput.value==""){
      startLabel.style.top="19px"
        startLabel.style.fontSize="1rem"
      }

})
