import { useState, useEffect } from 'react'
import { translations, projects } from './translations'
import './App.css'

function App() {
  const [lang, setLang] = useState('es')
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedProject, setExpandedProject] = useState(null)
  
  // Simple form state for simulation
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    document.title = translations[lang].title
  }, [lang])

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true)
      setTimeout(() => {
        setFormSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 5000)
    }
  }

  return (
    <div className="min-h-screen text-white selection:bg-pink-500 selection:text-white font-sans relative pb-4 bg-[url('/backgroundPink.jpg')] bg-repeat bg-cover bg-fixed">
      
      {/* Floating Navbar */}
      <nav className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl py-3 px-6 shadow-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand Area */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="h-12 flex items-center shrink-0">
              <img src="/logo.png" alt="NOZ" className="h-full w-auto max-w-[160px] object-contain drop-shadow-md" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                {translations[lang].brandName}
              </span>
              <span className="text-[10px] text-gray-300 tracking-widest uppercase font-medium">Nathalie Orellana</span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-amber-400 decoration-2">
              {translations[lang].personalInfoTitle}
            </a>
            <a href="#gallery" className="text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-amber-400 decoration-2">
              {translations[lang].translationsTitle}
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-amber-400 decoration-2">
              {translations[lang].contactTitle}
            </a>
          </div>

          {/* Controls: Language Switcher */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <svg className="w-3.5 h-3.5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {lang === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
            </button>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 md:pt-44 pb-10 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative">
        <div className="flex-1 space-y-6 text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/20 text-pink-300 text-xs font-semibold tracking-wider uppercase shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping"></span>
            {translations[lang].heroBadge}
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black leading-tight text-white drop-shadow-md">
            {translations[lang].heroTitle.split(' ').map((word, i) => {
              const threshold = lang === 'es' ? 4 : 2;
              return i >= threshold ? (
                <span key={i} className="bg-gradient-to-r from-amber-200 via-pink-200 to-purple-400 bg-clip-text text-transparent block sm:inline">{word} </span>
              ) : (
                word + ' '
              );
            })}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-light drop-shadow-sm">
            {translations[lang].heroSubtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#gallery" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 active:scale-95 shadow-lg text-sm"
            >
              {translations[lang].heroCtaPrimary}
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-black/60 hover:bg-black/80 text-white border border-white/10 font-bold rounded-xl transition-all duration-300 active:scale-95 text-sm"
            >
              {translations[lang].heroCtaSecondary}
            </a>
          </div>

        </div>

        {/* Decorative Interactive Logo Sphere */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            
            {/* Pulsing Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
            
            {/* Rotating Rings */}
            <div className="absolute w-full h-full border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[80%] h-[80%] border border-white/20 border-dashed rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            <div className="absolute w-[60%] h-[60%] border-2 border-brand-gold/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
             {/* The Orb */}
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full bg-black/80 border border-white/20 shadow-2xl flex flex-col items-center justify-center text-center p-4 backdrop-blur-xl group hover:border-pink-500/40 transition-all duration-500">
              
              {/* Logo Image */}
              <img 
                src="/logo.png" 
                alt="NOZ Traducciones Logo" 
                className="w-[80%] max-h-[45%] object-contain mb-1.5 drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Subtle line */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 my-1.5"></div>
              
              {/* Little detail */}
              <div className="text-[9px] md:text-[10px] tracking-widest text-amber-200 uppercase font-medium px-2 leading-tight">
                {lang === 'es' ? 'Traducción Profesional' : 'Professional Translation'}
              </div>

              {/* Orbiting Particle */}
              <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24] animate-orbit -ml-2 -mt-2"></div>
            </div>

          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-12 px-6 max-w-5xl mx-auto scroll-mt-24">
        <div className="bg-black/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl transition-all duration-300 hover:scale-[1.01] text-white">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Profile Placeholder/Graphics */}
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl bg-gradient-to-tr from-purple-800 to-pink-800 p-1 shadow-lg shrink-0">
              <div className="w-full h-full bg-[#120b1f] rounded-2xl flex flex-col items-center justify-center p-4 text-center border border-white/5 relative overflow-hidden group">
                {/* Visual elements */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-pink-500/10 rounded-full blur-xl group-hover:bg-pink-500/20 transition-all"></div>
                <svg className="w-10 h-10 text-amber-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs font-bold text-gray-300">Nathalie O. Z.</span>
                <span className="text-[9px] text-pink-300 uppercase tracking-widest mt-1">EN ⇄ ES</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-white relative inline-block">
                {translations[lang].personalInfoTitle}
                <span className="absolute left-0 -bottom-1.5 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              </h2>
              <div className="space-y-4 text-gray-200 font-light leading-relaxed text-base pt-2">
                <p>{translations[lang].personalInfoP1}</p>
                <p>{translations[lang].personalInfoP2}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 px-6 max-w-6xl mx-auto scroll-mt-24">
        
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-serif font-bold text-white drop-shadow-sm">
            {translations[lang].translationsTitle}
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto font-light drop-shadow-sm">
            {translations[lang].translationsSubtitle}
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-xl mx-auto p-1 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
          {Object.keys(translations[lang].categories).map((catKey) => (
            <button
              key={catKey}
              onClick={() => {
                setActiveCategory(catKey)
                setExpandedProject(null)
              }}
              className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === catKey
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {translations[lang].categories[catKey]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProject === project.id;
            return (
              <div 
                key={project.id}
                className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group h-fit text-white"
              >
                <div>
                  {/* Category & Format Badges */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-300/10">
                      {translations[lang].categories[project.category]}
                    </span>
                    
                    {/* Document Icon/Badge */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-300 bg-white/10 px-2 py-1 rounded-md border border-white/10">
                      {project.fileType === 'PDF' ? (
                        <svg className="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="font-semibold text-[10px]">{project.fileType}</span>
                    </div>
                  </div>

                  {/* Project Title & Description */}
                  <h3 className="text-xl font-semibold mb-2 text-white font-serif">
                    {project.title[lang]}
                  </h3>
                  <p className="text-gray-200 text-sm font-light leading-relaxed mb-6">
                    {project.desc[lang]}
                  </p>
                </div>

                {/* Interactive Panel */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  
                  {/* Before/After Sample (Collapsed) */}
                  {isExpanded && (
                    <div className="space-y-3 bg-black/60 p-4 rounded-xl text-xs border border-white/10 animate-fadeIn">
                      <div>
                        <div className="font-bold text-pink-300 mb-1 text-[10px] uppercase tracking-wider">
                          {translations[lang].originalLabel}
                        </div>
                        <p className="italic text-gray-300 font-light leading-relaxed">
                          "{project.excerpt.en}"
                        </p>
                      </div>
                      <div className="border-t border-white/5 pt-2">
                        <div className="font-bold text-amber-300 mb-1 text-[10px] uppercase tracking-wider">
                          {translations[lang].translatedLabel}
                        </div>
                        <p className="text-gray-100 font-light leading-relaxed">
                          "{project.excerpt.es}"
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 border border-white/10 cursor-pointer"
                    >
                      <span>{isExpanded ? translations[lang].hideCompareButton : translations[lang].compareButton}</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <a
                      href={project.fileUrl}
                      download={project.fileName}
                      className="bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 hover:text-white border border-purple-500/20 font-bold p-2.5 rounded-lg text-xs transition-all flex items-center justify-center aspect-square shadow-sm"
                      title={`${translations[lang].downloadButton} (${project.fileName})`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tip for the user on how to add actual files */}
        {/* <div className="mt-8 text-center bg-black/60 border border-white/10 rounded-xl p-4 max-w-2xl mx-auto shadow-lg">
          <p className="text-xs text-amber-200/70 font-light flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {lang === 'es' 
              ? "Tip: Para activar las descargas de los documentos, coloca tus archivos PDF/Word en la carpeta pública del proyecto: /public/docs/ con los nombres indicados."
              : "Tip: To enable document downloads, place your PDF/Word files in the project's public folder: /public/docs/ with the specified names."
            }
          </p>
        </div> */}

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-6 max-w-4xl mx-auto scroll-mt-24">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-white">
          
          <div className="absolute top-0 right-0 w-44 h-44 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              {translations[lang].contactTitle}
            </h2>
            <p className="text-gray-200 font-light max-w-xl mx-auto text-sm leading-relaxed">
              {translations[lang].contactSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
            
            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  required
                  placeholder={translations[lang].contactNamePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors w-full"
                />
                <input 
                  type="email" 
                  required
                  placeholder={translations[lang].contactEmailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors w-full"
                />
              </div>
              <textarea 
                required
                rows="4"
                placeholder={translations[lang].contactMsgPlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors w-full resize-none"
              ></textarea>
              
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg text-sm cursor-pointer hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
              >
                {translations[lang].contactButton}
              </button>

              {formSubmitted && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-xs text-center font-semibold animate-fadeIn">
                  {lang === 'es' 
                    ? "¡Mensaje enviado con éxito! (Demostración interactiva)" 
                    : "Message sent successfully! (Interactive demo)"
                  }
                </div>
              )}
            </form>

            {/* Direct Contact */}
            <div className="pt-6 border-t border-white/10 text-center space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
                {translations[lang].contactDirect}
              </span>
              <p className="text-xs text-gray-300 font-light">
                {translations[lang].contactDirectText}
              </p>
              <a 
                href="mailto:contacto@ejemplo.com" 
                className="text-lg font-bold text-white hover:text-purple-300 transition-colors inline-flex items-center gap-2 underline underline-offset-4 decoration-pink-500"
              >
                <svg className="w-5 h-5 text-pink-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contacto@ejemplo.com
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 mx-4 md:mx-auto bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl py-6 px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="text-sm text-gray-200 text-center sm:text-left">
          &copy; {new Date().getFullYear()} <span className="font-bold text-white">{translations[lang].brandName}</span>. {translations[lang].footerRights}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <a 
            href="#" 
            className="text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-xl transition-all active:scale-95 shadow-sm"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:contacto@ejemplo.com" 
            className="text-xs font-semibold text-pink-300 hover:text-pink-200 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 px-4 py-2 rounded-xl transition-all active:scale-95 shadow-sm"
          >
            Email
          </a>
        </div>
      </footer>

    </div>
  )
}

export default App
