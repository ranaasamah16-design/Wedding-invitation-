// =========================
// OPEN INVITATION
// =========================

const loader = document.getElementById("loader");
const openBtn = document.getElementById("openInvitation");

openBtn.addEventListener("click", () => {

    loader.style.opacity = "0";
    loader.style.transition = "opacity 1s ease";

    setTimeout(() => {

        loader.style.display = "none";

    },1000);

});

// =========================
// FADE IN ANIMATION
// =========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// =========================
// COUNTDOWN
// =========================

const weddingDate = new Date("August 16, 2026 10:30:00").getTime();


setInterval(()=>{

const now = new Date().getTime();

const distance = weddingDate - now;


const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);


document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;


},1000);
