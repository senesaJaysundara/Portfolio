import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProjectDetail from './pages/ProjectDetail'
import ProjectCard from './components/ProjectCard'
import "./App.css"

function App() {
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //close menu when a link is clicked
  const handleNavClick = (id: string) =>{
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 1500){
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(()=>{
      setLoading(false);  
    }, 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
    };
  }, []);
  return(
    <>
    {loading && (
      <div className='loader-screen'>
        <div className='loader-content'>
          <h1 className='loader-logo'>Senesa</h1>
          <div className='loader-bar'></div>
        </div>
      </div>
    )}
   <div className={`main-content ${!loading ? 'fade-in' : ''}`}>
    <Routes>
      <Route path='/' element={
    <>
    {/* Navigation */}
    <header className="navbar">
      <div className="nav-container">
        <span className="logo">Senesa</span>

        {/*Hamburger Icon*/}
        <button
        className={`hamburger ${isMenuOpen ? 'active':''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <button className='nav-link-btn' onClick={() => handleNavClick('about')}>About</button>
          <button className='nav-link-btn'  onClick={() => handleNavClick('projects')}>Projects</button>
          <button className='nav-link-btn'  onClick={() => handleNavClick('skills')}>Skills</button>
          <button className="nav-link-btn nav-cta" onClick={() => handleNavClick('contact')}>Contact</button>
        </nav>
      </div>
    </header>
    
    {/* Hero Section */}
    <section className="hero">
      <div className="container hero-layout">
        <span className="hero-greeting">Hello, I'm</span>
        <h1 className="hero-name">Senesa <br/> Jayasundara</h1>

        <div className="hero-action">
          <button className="btn primary" onClick={() => handleNavClick('projects')}>View Projects</button>
          <button className="btn ghost" onClick={() => handleNavClick('contact')}>Contact</button>
        </div>
      </div>

      <span className="scroll-hint" 
      onClick={()=>{
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }}>Scroll ↓</span>
    </section>

    {/* About Section */}
    <section className="about" id="about">
      <div className="container about-grid">
        <h2 className="section-title">About</h2>
        <p>A Computer Science student passionate about designing clean, responsive web interfaces and user experiences.
        <br/><br/>
        Also explore data analytics and continuously develop skills to build impactful and meaningful digital solutions.
        </p>
      </div>
    </section>

    {/* Project Section */}
    <section className="section projects" id="projects">
      <div className="container">
        <h3>Projects</h3>
        <div className="project-grid">
          <ProjectCard 
          title='Kuddles'
          description='A mobile app connecting parents and nannies'
          slug='kuddles'
          image='images/Kuddles.jpg'/>
          
          <ProjectCard
          title='CityNest'
          description='A web app for searching and filtering properties'
          slug='CityNest'
          image='images/citynest.png'/>

          <ProjectCard
          title='Good Health and Well-being'
          description='A website about the UN SDGS goal "Good Health and Well-being" to promote about health communities and healthy lifecycle'
          slug='GoodHealthandWellbeing'
          image='images/good-health.png'/>

          <ProjectCard
          title='Sales Data Analysis'
          description='Analysing sales data using Excel to uncover trends and business insights'
          slug='SalesAnalytics'
          image='images/sales-dashboard.png'/> 
      </div>
      </div>
    </section>

    {/* Skills */}
    <section className="section skills" id="skills">
      <div className="container">
        <h3>Skills</h3>
        <ul className="skills-grid">
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>SQL</li>
          <li>Figma</li>
          <li>Microsoft Office</li>
        </ul>
      </div>
    </section>

    {/* Contact Section */}
    <section className="section contact" id="contact">
      <div className="container contact-box">
        <h3>Let's work together</h3>

        <div className="contact-actions">
          <a href="mailto:senesajayasundara@gmail.com" className="btn primary">Email</a>
          <a href="https://github.com/senesaJaysundara" className="btn ghost">GitHub</a>
          <a href="https://www.linkedin.com/in/senesa-jayasundara-9174a6333" className="btn ghost">LinkedIn</a>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} SENESA JAYASUNDARA</p>
        <div className='footer-status'>
          <span>SYSTEM ACTIVE // DESIGNED WITH REACT</span>
        </div>
      </div>
    </footer>

    {/* Back to up button */}
    {showBtn &&(
      <button
      className='scroll-to-top'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>↑</button>
    )}
    </>
  }
  />
    <Route path='/projects/:slug' element={<ProjectDetail />} />
    </Routes>
    </div>
    </>
  );
}

export default App
