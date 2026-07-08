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
