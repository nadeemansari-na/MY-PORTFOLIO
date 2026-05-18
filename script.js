// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const hamicon= hamburger.querySelector("i");

hamicon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  
  if(navLinks.classList.contains("active")){
    hamicon.classList.remove("fa-bars");
    hamburger.classList.add("fa-xmark");
  }else{

    hamicon.classList.remove("fa-xmark");
    hamicon.classList.add("fa-bars")
  }
});

//CLOSE NAV WHEN LINK CLICKED 
const navItems=document.querySelectorAll(".nav-links a");
navItems.forEach((item)=>{
  item.addEventListener("click",()=>{
    navLinks.classList.remove("active");

    hamicon.classList.remove("fa-xmark");
    hamicon.classList.add("fa-bars");
  })
})

// CLOSE MOBILE MENU AFTER CLICKING A LINK

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// CONTACT FORM
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {

    const response = await fetch(
      "https://formspree.io/f/xpqjrovp",
      {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {

      alert("Message sent successfully!");

      form.reset();

    } else {

      alert("Something went wrong.");

    }

  } catch (error) {

    alert("Network error. Please try again.");

  }
});