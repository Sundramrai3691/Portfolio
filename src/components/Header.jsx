// src/components/Header.jsx
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Code } from "lucide-react";
import { PERSONAL } from "../data";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 style={{
          fontSize: '2rem', 
          fontWeight: 900, 
          background: 'linear-gradient(135deg, #9be7ff, #a78bfa, #fbbf24)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 30px rgba(155, 231, 255, 0.5)',
          letterSpacing: '0.02em',
          lineHeight: '1.1'
        }}>
          {PERSONAL.name} 
          <span className="text-muted" style={{
            fontSize:'.9rem', 
            marginLeft: 12,
            fontWeight: 600,
            color: 'var(--accent)',
            textShadow: 'none'
          }}>
            ({PERSONAL.handle})
          </span>
        </h1>
        <p className="text-muted" style={{
          marginTop: 8,
          fontSize: '1rem',
          fontWeight: 500
        }}>
          {PERSONAL.title}
        </p>
      </div>
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <a className="btn" href={`mailto:${PERSONAL.email}`}>Contact</a>
        <a className="text-muted" href={PERSONAL.links.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </header>
  );
};

export default Header;