let opened = false;
const message = "Chúc mừng 8/3! Chúc em luôn xinh đẹp, rạng rỡ như đóa hồng và luôn tràn đầy hạnh phúc. Cảm ơn em vì đã làm thế giới này thêm màu sắc!, mong em sẽ luôn tươi cười, có mỏi mệt hay cứ tựa vào anh nhé, anh luôn ở ngay phía sau em. YÊU EM  ✨💖";

function openLetter() {
    if (opened) return;
    opened = true;
    
    document.getElementById("main-title").style.opacity = "0";
    document.getElementById("env").classList.add("open");
    
    const music = document.getElementById("music");
    music.play();
    
    setTimeout(typeText, 1000);
    
    // Hiệu ứng bùng nổ tim và sao khi mở
    for(let i=0; i<50; i++) {
        createExplosion();
    }
    
    // Duy trì các hạt rơi lãng mạn
    setInterval(createFallingParticle, 500);
}

function typeText() {
    let i = 0;
    let el = document.getElementById("typing");
    let timer = setInterval(() => {
        el.innerHTML += message[i];
        i++;
        if (i >= message.length) clearInterval(timer);
    }, 40);
}

function createExplosion() {
    const p = document.createElement("div");
    p.className = "sparkle";
    const shapes = ["✨", "❤️", "🌸", "💖"];
    p.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
    
    // Tọa độ bùng nổ từ giữa phong bì
    const tx = (Math.random() - 0.5) * 500 + "px";
    const ty = (Math.random() - 0.5) * 500 + "px";
    p.style.setProperty('--tx', tx);
    p.style.setProperty('--ty', ty);
    
    p.style.left = "50%";
    p.style.top = "50%";
    p.style.position = "absolute";
    p.style.fontSize = Math.random() * 20 + 10 + "px";
    p.style.animationDuration = Math.random() * 1 + 1 + "s";
    
    document.querySelector(".envelope-wrapper").appendChild(p);
    setTimeout(() => p.remove(), 2000);
}

function createFallingParticle() {
    const p = document.createElement("div");
    p.innerHTML = Math.random() > 0.5 ? "🌸" : "✨";
    p.style.position = "fixed";
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = "-20px";
    p.style.fontSize = Math.random() * 15 + 10 + "px";
    p.style.transition = "transform 5s linear, opacity 5s";
    p.style.zIndex = "1";
    
    document.body.appendChild(p);
    
    setTimeout(() => {
        p.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
        p.style.opacity = "0";
    }, 100);
    setTimeout(() => p.remove(), 6000);
}

function resetCard() {
    location.reload();
}

// Motion 3D Tilt theo chuột
document.addEventListener("mousemove", (e) => {
    if (!opened) {
        const moveX = (window.innerWidth / 2 - e.pageX) / 15;
        const moveY = (window.innerHeight / 2 - e.pageY) / 15;
        document.getElementById("env").style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
    }
});