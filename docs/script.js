// =========================
// PAGE REFERENCES
// =========================

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

const welcomeBtn = document.getElementById("welcomeBtn");
const goBtn = document.getElementById("goBtn");
const nextBtn = document.getElementById("nextBtn");

const password = document.getElementById("password");
const wrongPassword = document.getElementById("wrongPassword");

const loveHeading = document.getElementById("loveHeading");
const emojiRain = document.getElementById("emojiRain");
const loveText = document.getElementById("loveText");
const message = `Yeah Baby,

I actually don't care about Girlfriend Day because I LOVE YOU every single day.

Not only because of love... I'm also a 24/7 GIRLFRIENDHOLIC (#UHOLIC 🤭😁).

But for my BABY GIRLFYY...

Happy National Girlfriend Day! 💖

Today is all about celebrating you, but honestly, every single day for the past 1 year and 3 months has felt like a celebration because I'm UHOLIC 🤭😁.

I have you in my life. Thank you for being the most amazing girlfriend.

I LOVE YOU more than all the miles between Earth and the Sun... and back. 💓💓`;

// =========================
// CHANGE PAGE
// =========================

function showPage(page){

    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
        p.style.display = "none";
    });

    if(page.id === "page3"){
        page.style.display = "block";
    }else{
        page.style.display = "flex";
    }

    page.classList.add("active");
}

// =========================
// PAGE 1 → PAGE 2
// =========================

welcomeBtn.onclick=()=>{

showPage(page2);

}

// =========================
// PASSWORD
// =========================

goBtn.onclick=()=>{

if(password.value==="143gf"){

showPage(page3);

setTimeout(()=>{
    typeWriter(message, loveText);
},500);

}else{

wrongPassword.innerHTML="💖 Wrong Password girlfyy 💖";

document.querySelector(".security-box").animate([

{transform:"translateX(-8px)"},
{transform:"translateX(8px)"},
{transform:"translateX(-8px)"},
{transform:"translateX(8px)"},
{transform:"translateX(0px)"}

],{

duration:350

});

}

}

// =========================
// PAGE 3 → PAGE 4
// =========================

nextBtn.onclick=()=>{

showPage(page4);

setTimeout(()=>{

startEmojiRain();

},1000);

}

// =========================
// FLOATING HEARTS
// =========================

const heartContainer=document.getElementById("floating-hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,400);

// =========================
// EMOJI RAIN
// =========================

const emojis=[
"💋",
"👸🏻",
"🫶🏻",
"💖",
"💕",
"👩🏻‍❤️‍💋‍👨🏻"
];

function startEmojiRain(){

setInterval(()=>{

const e=document.createElement("div");

e.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

e.style.position="fixed";

e.style.left=Math.random()*100+"vw";

e.style.top="-50px";

e.style.fontSize=(30+Math.random()*30)+"px";

e.style.transition="transform 6s linear";

e.style.zIndex="999";

document.body.appendChild(e);

setTimeout(()=>{

e.style.transform="translateY(120vh) rotate(360deg)";

},50);

setTimeout(()=>{

e.remove();

},7000);

},300);

}
function typeWriter(text, element, speed = 35) {

    element.innerHTML = "";

    let i = 0;

    function type() {

        if(i < text.length){

            if(text.charAt(i) === "\n"){
                element.innerHTML += "<br>";
            }else{
                element.innerHTML += text.charAt(i);
            }

            i++;

            setTimeout(type, speed);

        }else{

            // Start showing photos after typing finishes
            setTimeout(() => {
                showPhotos();
            }, 1000);

        }

    }

    type();

}

}
function showPhotos() {

    const photos = document.querySelectorAll(".photo");

    photos.forEach((photo, index) => {

        setTimeout(() => {

            photo.classList.add("show");

        }, index * 800);

    });

}
