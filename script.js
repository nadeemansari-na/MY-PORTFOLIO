var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
// progress bar
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width =
      scrollPercent + "%";
  });

  //watch media query for hamburger
  const mediaquery=window.matchMedia("(max-width:630px)");
  function handlequery(e){
    if(e.matches){
        document.getElementById("bar").classList.remove("hidd");
    }else{
        document.getElementById("bar").classList.add("hidd");
    }
  }
  mediaquery.addEventListener("change",handlequery);
  handlequery(mediaquery)

//scroll animation
// document.addEventListener('DOMContentLoaded',()=>{
//     const options = {
//         threshold : 0.1,
//     }

//     const observer =new IntersectionObserver((entries)=>{
//         entries.forEach((entry)=>{
//             if (entry.isIntersecting){
//                 entry.target.classList.add('show')
//             }
//             else{
//                 entry.target.classList.remove('show')
//             }
//         })
//     }, options)

//     const sections =document.querySelectorAll('.perce')
//     sections.forEach((section)=>{

//         observer.observe(section);
//     })

// })

let nikalna=document.querySelector(".nikalna")
const getre=()=>{

let burger=document.querySelector(".bar")
let baimg=burger.querySelector("img")
burger.addEventListener("click",e=>{
    nikalna.style.transform="translatey(40px)"
   baimg.src="close.svg"
   burger.classList.replace("bar","cancel")
    burger.style.transform="rotate(90deg) translate(5px,5px)"
    console.log("this is")
let cancel=document.querySelector(".cancel")
if(cancel){
cancel.addEventListener("click",v=>{
  console.log("or that")
    nikalna.style.transform="translatey(-460px)"
    let bbaimg=cancel.querySelector("img")
    bbaimg.src="hamburger.svg"
    cancel.classList.replace("cancel","bar")
    burger=document.querySelector(".bar")
    burger.style.transform="rotate(-0deg) translate(-5px,5px)"
    getre()
})
}
})
}
getre()



// clicking nikalna change
let burger=document.querySelector(".bar")
let change=document.querySelectorAll(".nikalna .sini")
change.forEach((v)=>{

    v.addEventListener("click",e=>{
        nikalna.style.transform="translatey(-260px)"
        let cancel=document.querySelector(".cancel")
        burger.style.transform="rotate(0deg) translate(0,0)"
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

//handle project and techstack button
//tech stack click button
let btn1=document.getElementById("proandtect");
let pro=document.getElementsByClassName("project")[0];
let skill= document.getElementById("skills");

btn1.children[1].addEventListener("click",x=>{
    // btn1.children[1].classList.toggle("tech")
    pro.classList.add("hide")
    skill.classList.remove("hide")

})

//project click button
btn1.children[0].addEventListener("click",e=>{
    skill.classList.add("hide")
    pro.classList.remove("hide")
    
})

//contact form
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xpqjrovp", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      form.reset(); // clears form
    } else {
      alert("❌ Oops! Something went wrong.");
    }
  });