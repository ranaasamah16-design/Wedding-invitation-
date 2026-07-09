/* =====================================
   RANA ❤️ SAMAH WEDDING INVITATION
   Complete JavaScript
===================================== */


/* ===============================
   OPEN INVITATION ANIMATION
================================ */

const openButton = document.querySelector(".btn");

if(openButton){

openButton.addEventListener("click", function(e){

    const target = document.querySelector("#details");

    if(target){

        e.preventDefault();

        target.scrollIntoView({
            behavior:"smooth"
        });

    }

});

}



/* ===============================
   SCROLL REVEAL ANIMATION
================================ */

const sections = document.querySelectorAll("section");


const revealObserver = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});

},
{
threshold:0.15
}
);


sections.forEach(section=>{

    section.classList.add("hidden");

    revealObserver.observe(section);

});



/* ===============================
   COUNTDOWN TIMER
================================ */


const weddingDate = new Date(
"August 16, 2026 10:30:00"
).getTime();



function updateCountdown(){


const now = new Date().getTime();


const difference = weddingDate - now;



if(difference < 0){

    document.getElementById("days").innerHTML="00";
    document.getElementById("hours").innerHTML="00";
    document.getElementById("minutes").innerHTML="00";
    document.getElementById("seconds").innerHTML="00";

    return;

}



const days = Math.floor(
difference/(1000*60*60*24)
);



const hours = Math.floor(
(difference%(1000*60*60*24))
/
(1000*60*60)
);



const minutes = Math.floor(
(difference%(1000*60*60))
/
(1000*60)
);



const seconds = Math.floor(
(difference%(1000*60))
/
1000
);



document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;


}



setInterval(updateCountdown,1000);

updateCountdown();




/* ===============================
   FLOATING HEART EFFECT
================================ */


function createHeart(){


const heart=document.createElement("div");


heart.innerHTML="♡";


heart.className="floating-heart";


heart.style.left=
Math.random()*100+"vw";


heart.style.animationDuration=
(3+Math.random()*4)+"s";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},7000);


}


setInterval(createHeart,1200);
