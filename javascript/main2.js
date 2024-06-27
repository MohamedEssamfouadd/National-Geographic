let menu=document.querySelector(".menu")
let menuModel=document.querySelector(".menu-model")
let exit=document.querySelector(".menu-model span i")
let nav=document.querySelector(".golobal-nav .nav")
let backgroundImg=document.querySelector(".background-img")
let ankor=document.querySelectorAll(".menu-list a")
let allAnkor=document.querySelectorAll(".menu-model ul a")
let search=document.querySelector("section.search-section")
let searchIcons=document.querySelector(".search a i")
let exitLogin=document.querySelector(".exit-login button")
let login=document.querySelector(".user-menu button")
let containerLogin=document.querySelector(".login-container")
let input=document.querySelector(".contain-form input")
let label=document.querySelector(".contain-form label")
let newsLetters=document.querySelector(".navbar-list .new")
let subscribeIcon=document.querySelector(".subscribe button")
subscribeIcon.addEventListener("click",()=>{
  window.location.href="index4.html"
})
newsLetters.addEventListener("click",(e)=>{
  e.preventDefault()
  location.href="index3.html"
})

login.addEventListener("click",()=>{
  containerLogin.style.display="block"
  search.style.display="none"
      nav.style.display="none"
  })
  exitLogin.addEventListener("click",()=>{
    containerLogin.style.display="none"
    search.style.display="block"
      nav.style.display="flex"
  
  })
  


searchIcons.addEventListener("click",(e)=>{
    e.preventDefault()
 
  })
  menu.addEventListener("click",()=>{
      menuModel.style.display="flex"
      search.style.display="none"
      nav.style.display="none"
  })
  exit.addEventListener("click",()=>{
      menuModel.style.display="none" 
      search.style.display="block"
      nav.style.display="flex"
  })
     
     

  allAnkor.forEach((data,index)=>data.addEventListener("click",(e)=>{
  e.preventDefault()
  }))
  ankor.forEach((data,index)=>data.addEventListener("mousemove",(e)=>{
    menuModel.setAttribute("data-test","testing")
    
    }))
    ankor.forEach((data,index)=>data.addEventListener("mouseleave",(e)=>{
    menuModel.removeAttribute("data-test","testing")
    
    }))
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




