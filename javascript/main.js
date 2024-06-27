const menu=document.querySelector(".menu")
const menuModel=document.querySelector(".menu-model")
const exit=document.querySelector(".menu-model span i")
const nav=document.querySelector(".golobal-nav .nav")
const backgroundImg=document.querySelector(".background-img")
const allAnkor=document.querySelectorAll(".menu-model ul a")
const ankor=document.querySelectorAll(".menu-list a")
const search=document.querySelector("section.search-section")
const searchIcons=document.querySelector(".search a i")
const myMain=document.querySelector("main.full-section")
const filterBar=document.querySelectorAll(".filter-bar-item a")
const storiesBtn=document.querySelector(".filter-bar .show")
const seriesBtn=document.querySelector(".filter-bar .hidden")
const storiesSection=document.querySelector(".all-stories")
const seriesSection=document.querySelector(".all-series")
const fristBnt=document.querySelector(".frist-btn-btn button")
const secondtBnt=document.querySelector(".second-btn-btn button")
const protitleTwo=document.querySelector(".protitle-container-two")
const protitleThree=document.querySelector(".protitle-container-three")
const scrollIcons=document.querySelector(".frist-scroll")
const scrollIconsTWO=document.querySelector(".second-scroll")
const scrollIconsthird=document.querySelector(".third-scroll")
const scrollNext=document.querySelector(".next i")
const scrollNexttwo=document.querySelector(".next-two i")
const scrollNextthree=document.querySelector(".next-three i")
const scrollBack=document.querySelector(".back i")
const scrollBackThree=document.querySelector(".back-three i")
const scrollBackTwo=document.querySelector(".back-two i")
const animals=document.querySelectorAll(".frist-animals")
const login=document.querySelector(".user-menu button")
const containerLogin=document.querySelector(".login-container")
const input=document.querySelector(".contain-form input")
const label=document.querySelector(".contain-form label")
const exitLogin=document.querySelector(".exit-login button")
const newsLetters=document.querySelector(".navbar-list .new")
const subscribeIcon=document.querySelector(".subscribe button")
subscribeIcon.addEventListener("click",()=>{
  window.location.href="index4.html"
})
newsLetters.addEventListener("click",()=>{
  location.href="index3.html"
})

seriesBtn.addEventListener("click",()=>{
  seriesSection.style.display="block"
  storiesSection.style.display="none"
})
storiesBtn.addEventListener("click",()=>{
  seriesSection.style.display="none"
  storiesSection.style.display="block"
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









login.addEventListener("click",()=>{
  myMain.style.display="none"
  containerLogin.style.display="block"
})
exitLogin.addEventListener("click",()=>{
  myMain.style.display="block"
  containerLogin.style.display="none"

})



scrollNext.addEventListener("click",()=>{

    scrollBack.style.display="block"
  scrollIcons.scrollLeft += 900
  if(scrollIcons.scrollLeft>=1400){
    scrollNext.style.display="none"
  }

})
scrollBack.addEventListener("click",()=>{
  scrollNext.style.display="block"
  scrollIcons.scrollLeft -= 900
  if(scrollIcons.scrollLeft< 1000){
    scrollBack.style.display="none"
  }

  
})
scrollNexttwo.addEventListener("click",()=>{
  scrollBackTwo.style.display="block"
  scrollIconsTWO.scrollLeft += 900
  if(scrollIconsTWO.scrollLeft>=1400){
    scrollNexttwo.style.display="none"
  }
  
  


})
scrollNextthree.addEventListener("click",()=>{
  scrollBackThree.style.display="block"
  scrollIconsthird.scrollLeft += 900
  if(scrollIconsthird.scrollLeft>=1400){
    scrollNextthree.style.display="none"
  }


})
scrollBackTwo.addEventListener("click",()=>{
 
  scrollNexttwo.style.display="block"
  scrollIconsTWO.scrollLeft -= 900
  if(scrollIconsTWO.scrollLeft< 1000){
    scrollBackTwo.style.display="none"
  }
  
})
scrollBackThree.addEventListener("click",()=>{
 
  scrollNextthree.style.display="block"
  scrollIconsthird.scrollLeft -= 900
  if(scrollIconsthird.scrollLeft< 1000){
    scrollBackThree.style.display="none"
  }
  
})

nav.addEventListener("click",(e)=>{
  e.preventDefault()
})
fristBnt.addEventListener("click",()=>{
  fristBnt.style.display="none"
  protitleTwo.style.display="block"
})
secondtBnt.addEventListener("click",()=>{
  secondtBnt.style.display="none"
  protitleThree.style.display="block"
})

let current=0;
filterBar.forEach((data,index)=>data.addEventListener("click",(e)=>{
  e.preventDefault()
  filterBar[current].classList.remove("activee")
  current=index
  filterBar[current].classList.add("activee")

}))

searchIcons.addEventListener("click",(e)=>{
  e.preventDefault()
window.location.href="index2.html";

})
menu.addEventListener("click",()=>{
    menuModel.style.display="flex"
    myMain.style.display="none"
   
})
exit.addEventListener("click",()=>{
    menuModel.style.display="none" 
    myMain.style.display="block"

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










