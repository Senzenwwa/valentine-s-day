document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const message = document.getElementById('message');
    const confettiContainer = document.getElementById('confetti-container');
    const bgMusic = document.getElementById('bgMusic');

    // Set initial volume
    bgMusic.volume = 0.5;

    // No button hover effect
    noBtn.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });

    yesBtn.addEventListener('click', () => {
        // Show the rose container
        const roseContainer = document.querySelector('.rose-container');
        roseContainer.style.display = 'block';
        
        const titleMessage = document.getElementById('glow-title');
        titleMessage.style.display = 'none'; // Add this line to hide the message


        // Remove the container's background
        const valentineContainer = document.querySelector('.container');
        valentineContainer.style.background = 'transparent';
        valentineContainer.style.boxShadow = 'none';

        // Update message and styles
        message.textContent = "happy Valentine's day baby! 💖🎉";
        message.style.color = '#FFFFFF'; // Make message white for visibility
        document.body.style.background = 'linear-gradient(45deg, #ff66b3, #ff4d4d)';
      
        // Hide buttons and cat
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
      
        // Create effects
        createConfetti();
        createHearts();
        // createFlowers();
      
        // Play music
        bgMusic.play().catch(error => {
          console.log("Audio play failed:", error);
        });
      });

    // Window resize handler
    window.addEventListener('resize', () => {
        const maxX = window.innerWidth - 50;
        const maxY = window.innerHeight - 50;
        posX = Math.min(posX, maxX);
        posY = Math.min(posY, maxY);
    });
});

// Volume control functions
function volumeUp() {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic.volume < 0.9) {
        bgMusic.volume += 0.1;
    }
}

function volumeDown() {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic.volume > 0.1) {
        bgMusic.volume -= 0.1;
    }
}

// Animation creation functions
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('hearts');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.textContent = '💖';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }
}

/*function createFlowers() {
    const flowerLeft = document.createElement('div');
    flowerLeft.className = 'flower flower--left';
    flowerLeft.innerHTML = `
        <div class="container">
	<div class="glass"></div>
	<div class="thorns">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="glow"></div>
	<div class="rose-leaves">
		<div></div>
		<div></div>
	</div>
	<div class="rose-petals">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="sparkles">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>
    `;
    
    const flowerRight = document.createElement('div');
    flowerRight.className = 'flower flower--right';
    flowerRight.innerHTML = flowerLeft.innerHTML;
    
    document.body.appendChild(flowerLeft);
    document.body.appendChild(flowerRight);
    
    setTimeout(() => {
        flowerLeft.classList.add('show');
        flowerRight.classList.add('show');
    }, 100);
}*/
