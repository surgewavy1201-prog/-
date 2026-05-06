/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Info, BookOpen } from 'lucide-react';
import { PROJECTS, Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject || isAboutOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, isAboutOpen]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm font-bold tracking-[0.4em] uppercase"
          >
            ARCHI-GRAD 2026
          </motion.h1>
          <div className="flex gap-6 md:gap-8 text-[11px] tracking-widest uppercase font-medium text-zinc-400">
            <button 
              className="text-zinc-900 border-b border-zinc-900 pb-1"
            >
              Works ({PROJECTS.length})
            </button>
            <button 
              onClick={() => setIsAboutOpen(true)}
              className="hover:text-zinc-900 cursor-pointer transition-all pb-1 border-b border-transparent hover:border-zinc-900"
            >
              About
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-40 pb-12 px-6 md:px-8 max-w-7xl mx-auto border-b border-zinc-100 mb-12">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[11px] text-zinc-400 tracking-[0.2em] mb-4 uppercase"
        >
          Architecture Graduation Archive
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif tracking-tighter leading-none"
        >
          The Vision of <br />
          <span className="text-zinc-300 italic">Future City 2026</span>
        </motion.h2>
      </header>

      {/* Project Grid */}
      <main className="pb-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-zinc-100 overflow-hidden relative">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-img"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[9px] text-zinc-400 uppercase tracking-widest">{project.category}</p>
                  <p className="text-[10px] text-zinc-300 font-mono">#{project.id.toString().padStart(2, '0')}</p>
                </div>
                <h3 className="text-lg font-medium tracking-tight group-hover:underline underline-offset-4 decoration-zinc-300">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-1">{project.designer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-white/95 backdrop-blur-xl pointer-events-auto"
            />
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-white w-full max-w-6xl shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh] overflow-hidden border border-zinc-100 rounded-sm pointer-events-auto m-4"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 hover:bg-zinc-50 rounded-full transition-all"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              {/* Left: Image */}
              <div className="w-full md:w-2/3 bg-zinc-50 overflow-hidden h-72 md:h-auto">
                <img 
                  src={selectedProject.img} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right: Description */}
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center overflow-y-auto bg-white border-l border-zinc-50">
                <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-300 mb-6">{selectedProject.category}</p>
                <h2 className="text-4xl font-serif tracking-tighter leading-tight mb-4">{selectedProject.title}</h2>
                <p className="text-md text-zinc-800 mb-8 font-medium tracking-tight">{selectedProject.designer}</p>
                
                <div className="space-y-6">
                  <div className="h-px bg-zinc-100 w-full" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-zinc-900 mb-3">Design Concept</h4>
                    <p className="text-[15px] leading-relaxed text-zinc-500 font-light">{selectedProject.desc}</p>
                  </div>
                  <div className="h-px bg-zinc-100 w-full" />
                </div>

                <div className="mt-12">
                  <button className="group w-full flex items-center justify-center gap-3 text-[11px] uppercase tracking-widest px-8 py-5 bg-zinc-900 text-white hover:bg-zinc-800 transition-all">
                    프로젝트 상세 페이지 보기
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* About Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAboutOpen(false)}
              className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl p-10 md:p-16 shadow-2xl border border-zinc-100"
            >
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-zinc-50 rounded-full transition-all"
              >
                <X size={20} className="text-zinc-400" />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-400">About Exhibition</h3>
                  <h2 className="text-2xl font-serif tracking-tight">ARCHI-GRAD 2026</h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] leading-relaxed text-zinc-600 font-light">
                <p>
                  <span className="font-medium text-zinc-900 italic underline decoration-zinc-200 underline-offset-4">ARCHI-GRAD 2026</span>은 2026년 졸업을 맞이하는 건축학도들의 치열한 고민과 창의적인 시선을 담은 온라인 졸업 작품전 아카이브입니다.
                </p>
                <p>
                  올해의 주제인 <span className="font-medium text-zinc-800">"The Vision of Future City 2026"</span>은 급변하는 기후 위기, 초고령화 사회, 그리고 디지털 전환이라는 거대한 흐름 속에서 우리가 살아가야 할 미래 도시의 물리적, 사회적 질서를 건축적으로 모색합니다.
                </p>
                <p>
                  20개 팀의 독창적인 프로젝트를 통해 내일의 공간이 제안하는 새로운 가능성을 직접 확인해 보시기 바랍니다.
                </p>
              </div>

              <div className="mt-12 flex flex-col gap-4">
                <div className="h-px bg-zinc-100 w-full" />
                <div className="flex justify-between text-[10px] tracking-[0.2em] uppercase text-zinc-400">
                  <span>Exhibition Period</span>
                  <span>2026.05.01 — 05.31</span>
                </div>
                <div className="flex justify-between text-[10px] tracking-[0.2em] uppercase text-zinc-400">
                  <span>Location</span>
                  <span>Online Archive</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-24 border-t border-zinc-100 bg-zinc-50 flex flex-col items-center">
        <motion.h2 
          whileHover={{ scale: 1.1 }}
          className="text-[11px] font-bold tracking-[0.5em] uppercase mb-4 italic cursor-default"
        >
          ARCHI-GRAD 2026
        </motion.h2>
        <p className="text-[10px] text-zinc-400 tracking-[0.2em] uppercase px-6 text-center">
          © 2026 ARCHITECTURE GRADUATION EXHIBITION ARCHIVE
        </p>
        <div className="mt-8 flex gap-6">
          <Info size={16} className="text-zinc-200" />
          <BookOpen size={16} className="text-zinc-200" />
        </div>
      </footer>
    </div>
  );
}
