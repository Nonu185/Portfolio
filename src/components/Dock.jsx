import React, { useRef } from 'react';
import './dock.scss';

const TECH_STACK = [
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: '/tech-icons/nodejs.svg',
  },
  {
    id: 'express',
    name: 'Express.js',
    icon: '/tech-icons/express.svg',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '/tech-icons/javascript.svg',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: '/tech-icons/mongodb.svg',
  },
  {
    id: 'react',
    name: 'React',
    icon: '/tech-icons/react.svg',
  },
  {
    id: 'python',
    name: 'Python',
    icon: '/tech-icons/python.svg',
  },
  {
    id: 'genai',
    name: 'Gen AI & RAG',
    icon: '/tech-icons/genai-rag.svg',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: '/tech-icons/tailwindcss.svg',
  },
  {
    id: 'postman',
    name: 'Postman',
    icon: '/tech-icons/postman.svg',
  },
];

const Dock = () => {
  const dockRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!dockRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const items = dockRef.current?.querySelectorAll('.di');
      if (!items) return;

      items.forEach((item) => {
        const ico = item.querySelector('.di-icon');
        if (!ico) return;

        const rect = item.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const dist = Math.abs(e.clientX - centerX);
        const inf = 80;

        let scale = 1;
        let lift = 0;
        let push = 0;

        if (dist < inf) {
          const t = 1 - dist / inf;
          const ease = Math.sin((t * Math.PI) / 2);
          scale = 1 + 0.45 * ease;
          lift = -14 * ease;
          push = 8 * ease;
        }

        ico.style.transform = `translateY(${lift}px) scale(${scale})`;
        item.style.marginLeft = `${push}px`;
        item.style.marginRight = `${push}px`;
      });
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (!dockRef.current) return;

    const items = dockRef.current.querySelectorAll('.di');
    items.forEach((item) => {
      const ico = item.querySelector('.di-icon');
      if (ico) {
        ico.style.transform = '';
      }
      item.style.marginLeft = '0px';
      item.style.marginRight = '0px';
    });
  };

  return (
    <div className="dock-wrap">
      <div className="dock-section-label">Tech Stack</div>
      <footer
        className="dock"
        id="dock"
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {TECH_STACK.map((tech) => (
          <div
            key={tech.id}
            className="di"
            data-name={tech.name}
            onClick={(e) => {
              e.preventDefault();
              // No window opened as requested, smooth click response
              const target = e.currentTarget;
              target.classList.add('active');
              setTimeout(() => target.classList.remove('active'), 500);
            }}
          >
            <div className="di-lbl">{tech.name}</div>
            <div className="di-icon">
              <img src={tech.icon} alt={tech.name} draggable={false} />
            </div>
            <div className="di-dot" />
          </div>
        ))}
      </footer>
    </div>
  );
};

export default Dock;
