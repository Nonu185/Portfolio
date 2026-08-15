import React from 'react';
import './desktop.scss';

const Desktop = () => {
  const projects = [
    {
      name: 'Orvyn',
      link: 'https://orvyn-ochre.vercel.app'
    },
    {
      name: 'Flakes-PDF',
      link: 'https://flakespdf.vercel.app'
    },  {
      name: 'Flakes-movie',
      link: 'https://project-1-puce-three.vercel.app'
    },
    {
      name: 'NocLang',
      link: 'https://noclang-simulator.vercel.app/'
    },
      {
      name: 'Snake Game',
      link: 'https://snakegame-theta-three.vercel.app'
    },
    
    
  ];

  return (
    <div className="desktop-icons">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="desktop-folder"
          onClick={() => window.open(project.link, '_blank')}
        >
          <div className="folder-icon">
             <img src="/doc-icons/mac-folder.svg" alt="Folder" />
          </div>
          <span className="folder-name">{project.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Desktop;
