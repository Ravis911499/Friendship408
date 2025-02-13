// Fireworks Animation using Canvas
function createFireworks() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999"; // Ensuring it appears above everything

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.size = Math.random() * 4 + 1;
            this.speedX = (Math.random() - 0.5) * 6;
            this.speedY = (Math.random() - 0.5) * 6;
            this.opacity = 1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.opacity -= 0.02;
        }

        draw() {
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createExplosion(x, y) {
        const colors = ["#FF0000", "#FF7300", "#FFD700", "#00FF00", "#00BFFF", "#FF69B4"];
        for (let i = 0; i < 500; i++) {
            particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
        }
    }

    function animateFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            if (particle.opacity <= 0) {
                particles.splice(index, 1);
            }
        });

        requestAnimationFrame(animateFireworks);
    }

    // Create multiple fireworks at different positions
    function startFireworks() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createExplosion(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height * 0.7
                );
            }, i * 500);
        }
        setTimeout(() => {
            document.body.removeChild(canvas);
        }, 20000);
    }

    animateFireworks();
    startFireworks();
}

// Trigger the Fireworks
function showSurprise() {
    createFireworks();
    alert("🎆 Surprise! with Love and joy for you! 💖");
    alert("Thank U 🥰🥰");
}
