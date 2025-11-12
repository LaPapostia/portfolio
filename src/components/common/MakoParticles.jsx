import { useEffect, useRef, useState } from "react";

export default function MakoParticles() {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const random = (min, max) => Math.random() * (max - min) + min;

    const createParticle = () => ({
      x: random(0, canvas.width),
      y: random(0, canvas.height),
      radius: random(1, 3),
      alpha: random(0.25, 0.6),
      speedY: random(-0.3, -0.1),
      glow: random(4, 10),
      hue: isDark ? random(175, 195) : random(130, 150), // 💡 azul-cyan en oscuro, verde en claro
    });

    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", resize);
    resize();

    for (let i = 0; i < 25; i++) particles.push(createParticle());

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (isDark) {
          // 🌌 Tema oscuro → cyan brillante tipo energía mako
          const brightness = random(65, 85);
          const opacity = p.alpha * 1.4;
          ctx.fillStyle = `hsla(${p.hue}, 95%, ${brightness}%, ${opacity})`;
          ctx.shadowBlur = p.glow * 1.8;
          ctx.shadowColor = `hsl(${p.hue}, 100%, ${brightness}%)`;
        } else {
          // ☀️ Tema claro → verde translúcido más natural
          const brightness = random(40, 55);
          const opacity = p.alpha * 0.8;
          ctx.fillStyle = `hsla(${p.hue}, 80%, ${brightness}%, ${opacity})`;
          ctx.shadowBlur = p.glow * 0.6;
          ctx.shadowColor = `hsl(${p.hue}, 60%, 50%)`;
        }

        ctx.fill();

        // Movimiento suave ascendente
        p.y += p.speedY;
        p.alpha -= 0.0015;

        if (p.alpha <= 0 && Math.random() > 0.98) {
          particles[i] = createParticle();
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
