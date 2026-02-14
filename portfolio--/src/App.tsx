import "./App.css"

function App() {
  return(
    <>
    {/* Navigation */}
    <header className="navbar">
      <div className="container nav-content">
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

      <span className="scroll-hint">Scroll</span>
    </section>

    {/* About Section */}
    <section className="about" id="about">
      <div className="container about-grid">
        <h2 className="section-title">About</h2>
        <p>I'm a computer science student who as an interest in building clean and responsive interfaces and web applications. Also in data analysis which I learn everyday by myself</p>
      </div>
    </section>

    {/* Project Section */}
    <section className="section projects" id="projects">
      <div className="container">
        <h3>Projects</h3>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-image kuddles"></div>
            <div className="project-content">
              <h4>Kuddles</h4>
              <p>A mobile application that connect parents and nanny with their children's daily activities</p>

              <div className="project-tags">
                <span>React Native</span>
                <span>Node.js</span>
                <span>Firebase</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image CityNest"></div>
            <div className="project-content">
              <h4>CityNest Properties</h4>
              <p>A estate agent web application that allows user to search and filter properties</p>

              <div className="project-tags">
                <span>React Native</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image GoodHealth"></div>
            <div className="project-content">
              <h4>Good Health and Well-being</h4>
              <p>A website about the UN SDGS goal "Good Health and Well-being" to promote about health communities and healthy lifecycle</p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image portfolio"></div>
            <div className="project-content">
              <h4>Personal Portfolio</h4>
              <p>Personal portfolio website about myself, project that have done, and skills in a clean and responsive web design</p>

              <div className="project-tags">
                <span>React Native - Typescript</span>
                <span>CSS</span>
              </div>
          </div>
        </div>
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
          <a href="https://www.linkedin.com/in/senesa-jayasundara-9174a6333" className="btn ghost">LinkdeIn</a>
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
  )
}

export default App
