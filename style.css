body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #ff99cc, #ff66b3);
    font-family: 'Brush Script MT', cursive;
    overflow: hidden;
    position: relative;
}

.container {
    text-align: center;
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem 4rem;
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(255, 0, 102, 0.3);
}

h1 {
    color: #cc0066;
    font-size: 3em;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    margin: 0 0 1rem 0;
}

.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

#cat {
    font-size: 60px;
    position: absolute;
    transition: all 0.5s;
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
}

.buttons {
    margin-top: 30px;
    position: relative;
    z-index: 2;
}

button {
    padding: 15px 30px;
    margin: 10px;
    font-size: 1.2em;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}

#yesBtn {
    background: #ff4d4d;
    color: white;
}

#noBtn {
    background: #666;
    color: white;
    position: relative;
}

#message {
    margin-top: 20px;
    font-size: 2.5em;
    color: #cc0066;
    height: 50px;
    position: relative;
}

#message::before, #message::after {
    content: '🌹';
    position: absolute;
    font-size: 1.5em;
    animation: grow 1s ease-out;
}

#message::before {
    left: -60px;
}

#message::after {
    right: -60px;
}

.confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #ff0000;
    animation: confettiFall 3s linear forwards;
}

@keyframes grow {
    0% { transform: scale(0); }
    80% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

@keyframes confettiFall {
    0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

.hearts {
    position: absolute;
    font-size: 20px;
    animation: hearts 3s ease-out;
}

@keyframes hearts {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-100px) scale(2); opacity: 0; }
}
