export class Background {
    init() {
        // 1. Loading Animation
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
        // 2. Interactive Canvas Network Constellation (Populated Museum Blueprint)
        const animatedBg = document.getElementById('animatedBg');
        if (animatedBg) {
            animatedBg.innerHTML = '';
            const canvas = document.createElement('canvas');
            canvas.style.position = 'absolute';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.display = 'block';
            animatedBg.appendChild(canvas);
            const ctx = canvas.getContext('2d');
            if (ctx) {
                let width = canvas.width = window.innerWidth;
                let height = canvas.height = window.innerHeight;
                window.addEventListener('resize', () => {
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                });
                const numNodes = 120; // Populated from 60
                const nodes = [];
                for (let i = 0; i < numNodes; i++) {
                    nodes.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: (Math.random() - 0.5) * 0.18, // Faint slow drift
                        vy: (Math.random() - 0.5) * 0.18,
                        radius: Math.random() * 2.2 + 1.0 // Slightly larger
                    });
                }
                let mouseX = -1000;
                let mouseY = -1000;
                window.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                }, { passive: true });
                window.addEventListener('mouseleave', () => {
                    mouseX = -1000;
                    mouseY = -1000;
                });
                let speedMultiplier = 1.0;
                window.triggerStarfieldWarp = (speed) => {
                    speedMultiplier = speed / 5.0;
                    setTimeout(() => {
                        speedMultiplier = 1.0;
                    }, 3000);
                };
                const update = () => {
                    ctx.fillStyle = '#fcfbfa';
                    ctx.fillRect(0, 0, width, height);
                    // Update and Draw Nodes
                    nodes.forEach(node => {
                        node.x += node.vx * speedMultiplier;
                        node.y += node.vy * speedMultiplier;
                        if (node.x < 0 || node.x > width)
                            node.vx *= -1;
                        if (node.y < 0 || node.y > height)
                            node.vy *= -1;
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(18, 18, 18, 0.08)'; // Increased visibility
                        ctx.fill();
                    });
                    // Draw Network Edges
                    for (let i = 0; i < numNodes; i++) {
                        for (let j = i + 1; j < numNodes; j++) {
                            const dx = nodes[i].x - nodes[j].x;
                            const dy = nodes[i].y - nodes[j].y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < 165) { // Increased distance range
                                ctx.beginPath();
                                ctx.moveTo(nodes[i].x, nodes[i].y);
                                ctx.lineTo(nodes[j].x, nodes[j].y);
                                ctx.strokeStyle = `rgba(18, 18, 18, ${0.08 * (1 - dist / 165)})`; // Darker lines
                                ctx.lineWidth = 0.5;
                                ctx.stroke();
                            }
                        }
                        // Mouse hover attraction field
                        if (mouseX !== -1000 && mouseY !== -1000) {
                            const dx = nodes[i].x - mouseX;
                            const dy = nodes[i].y - mouseY;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < 180) {
                                nodes[i].x -= dx * 0.005;
                                nodes[i].y -= dy * 0.005;
                            }
                        }
                    }
                    requestAnimationFrame(update);
                };
                update();
            }
        }
    }
}
