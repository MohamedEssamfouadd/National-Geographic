let btn=document.querySelectorAll(".sub-btn")
let check=document.querySelector(".check")
let checkHidden=document.querySelector(".check-hidden")
console.log(btn);
let current=0;
btn.forEach((data,index)=>data.addEventListener("click",()=>{
    btn[current].classList.remove("actives")
    current=index
    btn[current].classList.add("actives")
}))
check.addEventListener("click",()=>{
    check.style.display="none"
    checkHidden.style.display="block"
    setTimeout(()=>{
        window.location.href="index5.html"

    },3000)
})
