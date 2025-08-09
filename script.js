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



//add event listener to hamburger
let nikalna=document.getElementsByClassName("nikalna")
let burger=document.getElementsByClassName("bar")
burger[0].addEventListener("click",e=>{
    nikalna[0].style.transform="translatey(60px)"
})

let cancel=document.querySelector(".cancel")
cancel.addEventListener("click",v=>{
    nikalna[0].style.transform="translatey(-400px)"
})

// clicking nikalna change
let change=document.querySelectorAll(".nikalna .sini")
change.forEach((v)=>{

    v.addEventListener("click",e=>{
        nikalna[0].style.transform="translatey(-400px)"
    })
})

//clicking ico
let icchan=document.querySelectorAll(".simi")
icchan.forEach((v)=>{
    v.addEventListener("click",x=>{
        
    })
})