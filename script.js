document.addEventListener('DOMContentLoaded', () => {
    const cat = document.getElementById('cat');
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const message = document.getElementById('message');
    
    // Cat animation
    let posX = 0;
    let posY = 0;
    let speedX = 3;
    let speedY = 2;

    function animateCat() {
        posX += speedX;
        posY += speedY;
        
        if (posX >= window.innerWidth - 50 || posX <= 0) speedX = -speedX;
        if (posY >= window.innerHeight - 50 || posY <= 0) speedY = -speedY;
        
        cat.style.left = posX + 'px';
        cat.style.top = posY + 'px';
        
        requestAnimationFrame(animateCat);
    }

    animateCat();

    // No button hover effect
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });

    // Yes button click
    yesBtn.addEventListener('click', () => {
        message.textContent = "Yay! Happy Valentine's Day! 💖🎉";
        document.body.style.background = '#ff66b3';
        cat.style.display = 'none';
        yesBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            yesBtn.style.transform = 'scale(1)';
        }, 200);
    });

    // Window resize handler
    window.addEventListener('resize', () => {
        posX = Math.min(posX, window.innerWidth - 50);
        posY = Math.min(posY, window.innerHeight - 50);
    });
});
