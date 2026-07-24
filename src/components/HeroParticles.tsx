import React, { useEffect, useRef } from 'react';

export default function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    // Mouse coordinates
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120, // Interaction radius
    };

    // Responsive Canvas Resizing using ResizeObserver as requested by constraints
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: boxWidth, height: boxHeight } = entry.contentRect;
        width = boxWidth;
        height = boxHeight;
        canvas.width = boxWidth;
        canvas.height = boxHeight;
        initParticles();
      }
    });

    resizeObserver.observe(container);

    // Particle class representing nodes
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      radius: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow corporate-like floating velocities
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.baseRadius = Math.random() * 2 + 1.5;
        this.radius = this.baseRadius;
        
        // Brand color pallet mapping
        const r = Math.random();
        if (r < 0.5) {
          this.color = '79, 166, 79'; // Premium Green (#4FA64F)
        } else if (r < 0.8) {
          this.color = '47, 109, 60';  // Dark Green (#2F6D3C)
        } else {
          this.color = '242, 194, 48'; // Gold (#F2C230)
        }
        this.alpha = Math.random() * 0.4 + 0.2;
      }

      update() {
        // Move particles
        this.x += this.vx;
        this.y += this.vy;

        // Bounce boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (push away subtly)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Vector calculation
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
            this.radius = this.baseRadius * 1.4;
          } else {
            if (this.radius > this.baseRadius) {
              this.radius -= 0.05;
            }
          }
        } else {
          if (this.radius > this.baseRadius) {
            this.radius -= 0.05;
          }
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        context.fill();
      }
    }

    let particles: Particle[] = [];

    function initParticles() {
      // Density-based particle count
      const density = Math.floor((width * height) / 11000);
      const particleCount = Math.min(80, Math.max(25, density));
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    // Interactive connection lines between nearby nodes
    function drawConnections(context: CanvasRenderingContext2D) {
      const maxDistance = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.14;
            context.beginPath();
            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
            // Draw gradient-like premium lines connecting system nodes
            context.strokeStyle = `rgba(79, 166, 79, ${alpha})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }

        // Subtly connect particles directly to mouse for high-end micro-interaction
        if (mouse.x !== null && mouse.y !== null) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.18;
            context.beginPath();
            context.moveTo(p.x, p.y);
            context.lineTo(mouse.x, mouse.y);
            context.strokeStyle = `rgba(242, 194, 48, ${alpha})`; // Gold connection lines
            context.lineWidth = 1;
            context.stroke();
          }
        }
      }
    }

    // Animation Loop
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Draw network lines
      drawConnections(ctx);

      animationId = requestAnimationFrame(animate);
    }

    animate();

    // Mouse listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Cleanup on unmount
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden"
      id="hero-particles-canvas-container"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-60"
        id="hero-particles-canvas"
      />
    </div>
  );
}
