var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

//scroll animation
document.addEventListener('DOMContentLoaded',()=>{
    const options = {
        threshold : 0.1,
    }

    const observer =new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                entry.target.classList.add('show')
            }
            else{
                entry.target.classList.remove('show')
            }
        })
    }, options)

    const sections =document.querySelectorAll('.perce')
    sections.forEach((section)=>{

        observer.observe(section);
    })

})

let nikalna=document.querySelector(".nikalna")
const getre=()=>{

let burger=document.querySelector(".bar")
let baimg=burger.querySelector("img")
burger.addEventListener("click",e=>{
    nikalna.style.transform="translatey(60px)"
   baimg.src="close.svg"
   burger.classList.replace("bar","cancel")

let cancel=document.querySelector(".cancel")
if(cancel){
cancel.addEventListener("click",v=>{
    nikalna.style.transform="translatey(-460px)"
    let bbaimg=cancel.querySelector("img")
    bbaimg.src="hamburger.svg"
    cancel.classList.replace("cancel","bar")
    burger=document.querySelector(".bar")
    getre()
})
}
})
}
getre()
// clicking nikalna change
let change=document.querySelectorAll(".nikalna .sini")
change.forEach((v)=>{

    v.addEventListener("click",e=>{
        nikalna.style.transform="translatey(-400px)"
        let cancel=document.querySelector(".cancel")
        cancel.querySelector("img").src="hamburger.svg"
        cancel.classList.replace("cancel","bar")
        getre()
    })
})

//clicking ico
let icchan=document.querySelectorAll(".simi")
icchan.forEach((v)=>{
    v.addEventListener("click",x=>{
        
    })
})