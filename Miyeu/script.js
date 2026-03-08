let opened = false;
const message = "Chúc mừng 8/3! Chúc em luôn xinh đẹp, rạng rỡ như đóa hồng và luôn tràn đầy hạnh phúc. Cảm ơn em vì đã làm thế giới này thêm màu sắc!, mong em sẽ luôn tươi cười, có mỏi mệt hay cứ tựa vào anh nhé, anh luôn ở ngay phía sau em. YÊU EM ✨💖";

// LINK CÁNH HOA: Bạn có thể thay link ảnh cánh hoa khác tại đây
const FLOWER_IMAGE = "https://raw.githubusercontent.com/upload/wikipedia/commons/thumb/1/1a/Rose_petal.png/240px-Rose_petal.png";

function openLetter() {
    if (opened) return;
    opened = true;
    
    document.getElementById("main-title").style.opacity = "0";
    document.getElementById("env").classList.add("open");
    
    const music = document.getElementById("music");
    music.play();
    
    setTimeout(typeText, 1000);
    
    // Hiệu ứng bùng nổ tim và sao khi mở
    for(let i=0; i<40; i++) {
        createExplosion();
    }
    
    // Tạo cánh hoa rơi bằng hình ảnh
    setInterval(createFallingFlower, 600);
}

function typeText() {
    let i = 0;
    let el = document.getElementById("typing");
    let timer = setInterval(() => {
        el.innerHTML += message[i];
        i++;
        if (i >= message.length) clearInterval(timer);
    }, 45);
}

function createExplosion() {
    const p = document.createElement("div");
    p.className = "sparkle";
    const shapes = ["✨", "❤️", "💖", "💕"];
    p.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
    
    const tx = (Math.random() - 0.5) * 400 + "px";
    const ty = (Math.random() - 0.5) * 400 + "px";
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

function createFallingFlower() {
    const flower = document.createElement("img");
    flower.src = FLOWER_IMAGE;
    flower.className = "flower-img";
    flower.style.left = Math.random() * 100 + "vw";
    
    const size = Math.random() * 20 + 20 + "px";
    flower.style.width = size;
    
    const duration = Math.random() * 3 + 4; // 4s - 7s
    flower.style.transition = `transform ${duration}s linear, opacity ${duration}s`;
    
    document.body.appendChild(flower);
    
    setTimeout(() => {
        flower.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
        flower.style.opacity = "0";
    }, 100);
    
    setTimeout(() => flower.remove(), duration * 1000);
}

function resetCard() {
    location.reload();
}

document.addEventListener("mousemove", (e) => {
    if (!opened) {
        const moveX = (window.innerWidth / 2 - e.pageX) / 20;
        const moveY = (window.innerHeight / 2 - e.pageY) / 20;
        document.getElementById("env").style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
    }
});