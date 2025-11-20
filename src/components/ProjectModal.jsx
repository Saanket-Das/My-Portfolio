import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  useEffect(()=>{
    const onKey = e => { if(e.key==='Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[onClose]);

  if(!project) return null;

  return (
    <div className="modal-bg" onClick={onClose}>
      <motion.div
        className="modal"
        onClick={e=>e.stopPropagation()}
        initial={{y:40, opacity:0, scale:0.98}}
        animate={{y:0, opacity:1, scale:1}}
        exit={{y:20, opacity:0}}
        transition={{duration:0.32, ease:[0.2,0.9,0.2,1]}}
      >
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'start'}}>
          <div>
            <h3 style={{fontSize:20,fontWeight:700,color:'#fff'}}>{project.title}</h3>
            <p style={{color:'#cbd5e1',marginTop:6}}>{project.short}</p>
          </div>

          <button onClick={onClose} style={{background:'transparent',border:'none',fontSize:20,color:'#cbd5e1'}}>✕</button>
        </div>

        {project.image && <img src={project.image} alt={project.title} style={{width:'100%',borderRadius:10,marginTop:12}} />}

        <div style={{marginTop:12,color:'#e2e8f0'}}>
          <p>{project.description}</p>
          <div style={{marginTop:12,display:'flex',gap:8,flexWrap:'wrap'}}>
            {project.tags.map((t,i)=>(<span key={i} className="tag" style={{background:'rgba(255,255,255,0.06)',color:'#cbd5e1'}}>{t}</span>))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
