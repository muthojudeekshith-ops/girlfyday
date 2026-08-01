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

// =========================
// CHANGE PAGE
// =========================

function showPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});

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

}else{

wrongPassword.innerHTML="💖 Wrong Password Princess 💖";

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
