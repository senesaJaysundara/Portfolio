import {Routes, Route} from 'react-router-dom'
import ProjectDetail from './pages/ProjectDetail'
import ProjectCard from './components/ProjectCard'
import "./App.css"

function App() {
  return(
    <Routes>
      <Route path='/' element={
    <>
    {/* Navigation */}
    <header className="navbar">
      <div className="nav-container">
        <span className="logo">Senesa</span>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </div>
    </header>
    
    {/* Hero Section */}
    <section className="hero">
      <div className="container hero-layout">
        <span className="hero-greeting">Hello, I'm</span>
        <h1 className="hero-name">Senesa <br/> Jayasundara</h1>
        <p className="hero-subtitle">Aspiring computer science student</p>

        <div className="hero-action">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn ghost">Contact</a>
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
        <p>I'm a computer science student who has an interest in building clean and responsive interfaces and web applications. Also in data analysis which I learn everyday by myself</p>
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
          image='/images/Kuddles.jpg'/>
          
          <ProjectCard
          title='CityNest'
          description='A web app for searching and filtering properties'
          slug='CityNest'
          image='/images/citynest.png'/>

          <ProjectCard
          title='Good Health and Well-being'
          description='A website about the UN SDGS goal "Good Health and Well-being" to promote about health communities and healthy lifecycle'
          slug='GoodHealthandWellbeing'
          image='/images/good-health.png'/>

          <ProjectCard
          title='Personal Portfolio'
          description='Personal portfolio website about myself, project that have done, and skills in a clean and responsive web design'
          slug='Portfolio'
          image=''/>
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
        </ul>
      </div>
    </section>

    {/* Contact Section */}
    <section className="section contact" id="contact">
      <div className="container contact-box">
        <h3>Let's work together</h3>

        <div className="contact-actions">
          <a href="mailto:senesajay11@gmail.com" className="btn primary">Email</a>
          <a href="https://github.com/senesaJaysundara" className="btn ghost">GitHub</a>
          <a href="https://www.linkedin.com/in/senesa-jayasundara-9174a6333" className="btn ghost">LinkedIn</a>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Senesa Jayasundara</p>
        <span>Designed & built with React</span>
      </div>
    </footer>
    </>
    
  }
  />
    <Route path='/projects/:slug' element={<ProjectDetail />} />
    </Routes>
  );
}

export default App
