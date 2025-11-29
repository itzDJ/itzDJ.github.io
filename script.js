// Matrix rain effect
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.opacity = '0.3';

document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

function draw() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
