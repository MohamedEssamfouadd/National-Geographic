var menu=document.querySelector(".menu")
var menuModel=document.querySelector(".menu-model")
var exit=document.querySelector(".menu-model span i")
var nav=document.querySelector(".golobal-nav .nav ")
var allAnkor=document.querySelectorAll(".menu-model ul a")
var ankor=document.querySelectorAll(".menu-list a")
var search=document.querySelector("section.search-section")
var searchIcons=document.querySelector(".search a i")
var login=document.querySelector(".user-menu button")
var containerLogin=document.querySelector(".login-container")
var input=document.querySelector(".contain-form input")
var label=document.querySelector(".contain-form label")
var exitLogin=document.querySelector(".exit-login button")
var newsLetters=document.querySelector("main")
var subscribeIcon=document.querySelector(".subscribe button")
subscribeIcon.addEventListener("click",()=>{
  window.location.href="index4.html"
})
input.addEventListener("input",()=>{
  if(input.value!==""){
    label.style.top=0
    label.style.fontSize=".7rem"
  }
   
  if(input.value==""){
    label.style.top="18px"
    label.style.fontSize=".9rem"
  }


})

searchIcons.addEventListener("click",(e)=>{
  e.preventDefault()
  window.location.href="index2.html"
})
let lastScroll=0;
window.addEventListener("scroll",()=>{
  const currentScroll=window.scrollY
  if(currentScroll>lastScroll){ 
    nav.classList.add("move-up")
  }
  if(currentScroll<100){
    nav.classList.add("move-down")
    nav.classList.remove("move-up")
    

  }



  if(currentScroll<lastScroll){
    nav.classList.remove("move-up")
    nav.classList.add("move-down")
  }

  lastScroll=currentScroll
})
allAnkor.forEach((data,index)=>data.addEventListener("click",(e)=>{
  e.preventDefault()
  }))
ankor.forEach((data,index)=>data.addEventListener("click",(e)=>{
menuModel.setAttribute("data-test","testing")

}))
ankor.forEach((data,index)=>data.addEventListener("mousemove",(e)=>{
menuModel.setAttribute("data-test","testing")

}))
ankor.forEach((data,index)=>data.addEventListener("mouseleave",(e)=>{
menuModel.removeAttribute("data-test","testing")
}))
menu.addEventListener("click",()=>{
  menuModel.style.display="flex"
  newsLetters.style.display="none"
 
})
exit.addEventListener("click",()=>{
  menuModel.style.display="none" 
  newsLetters.style.display="block"

})
login.addEventListener("click",()=>{
 newsLetters.style.display="none"
  containerLogin.style.display="block"
})
exitLogin.addEventListener("click",()=>{
 newsLetters.style.display="block"
  containerLogin.style.display="none"

})

