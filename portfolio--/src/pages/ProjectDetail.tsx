import {useNavigate, useParams} from 'react-router-dom'

const projects = {
    kuddles: {
        title: "kuddles",
        overview: "A mobile application that connects both paernts and nannies, by updating child's activity in real time",
        tech: ["React Native - Typesript", "Node.js", "Firebase","MongoDB"],
        problem: "Parents oftern struggles to find a reliable nanny for their children, and they also want to stay updated with their children's daily activities. On the other hand, nannies also want to have a platform to connect with parents and manage their work more efficiently.",
        solution: "Designs a mobile application with a user friendly interface and real-time updates with clear activity tracking",
        heroImage: "/images/Kuddles.jpg",
        screenshots: [
            "/images/Kuddles poster.jpg",
            "/images/Kuddles-UI.jpeg",
        ]
    },
    CityNest: {
        title: "CityNest",
        overview: "A web application that allows users to search and filter properties based on their preferences in searching properties",
        tech: ["React Native- JavaScript"],
        problem: "People struggles to find a reliable platform to search for properties that match their preferences, and they also want to have a user-friendly interface to easily navigate through the listings.",
        solution: "Designs a web application with a user friendly interface that search and filter the properties",
        heroImage: "/images/citynest.png",
        screenshots: [
            "/images/citynest-properties.png",
            "/images/citynest-property-details.png",
        ]
    },
    GoodHealthandWellbeing: {
        title: "Good Health and Well-being",
        overview: "A website about the UN SDGS goal 'Good Health and Well-being' to promote about health communities and healthy lifecycle",
        tech: ["HTML","CSS"],
        problem: "Many people are not aware of the importance of good health and well-being, and they also lack access to reliable information about how to maintain a healthy lifestyle.",
        solution: "Designs a web application with a user friendly interface that promotes health and well-being information",
        heroImage: "/images/good-health.png",
        screenshots:[
            "/images/good-health-splash.png",
            "/images/good-health-page.png",
        ]
    },
    // Portfolio: {
    //     title: "Personal Portfolio",
    //     overview: "A personal portfolio website showcasing projects and skills",
    //     tech: ["React - TypeScript"],
    //     problem: "Need a professional portfolio to showcase projects and skills effectively.",
    //     solution: "Designs a responsive and visually appealing portfolio website with clear navigation and project details.",
    //     heroImage: "",
    //     screenshots:[

    //     ]
    // },
};

function ProjectDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projects[slug as keyof typeof projects];
    if (!project) return <p>Project not found</p>;

    return(
        <section className='project-detail'>
            <div className='container'>

                {/* Back button */}
                <button className='back-btn' onClick={() => navigate('/')}>
                    ← Back to homepage
                </button>
                <div className='project-hero'>
                    <img src={project.heroImage} alt={project.title}/>
                </div>
                <h1>{project.title}</h1>
                <p className="project-overview">{project.overview}</p>

                <div className='project-meta'>
                    <div>
                        <h4>Technologies:</h4>
                        <div className='techno'>
                            {project.tech.map((t)=>(
                                <span key={t}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='project-section'>
                    <h3>Problem</h3>
                    <p>{project.problem}</p>
                </div>

                <div className='project-section'>
                    <h3>Solution</h3>
                    <p>{project.solution}</p>
                </div>

                {project.screenshots && (
                    <div className='project-section'>
                        <h3>Project Pictures</h3>
                        <div className='project-gallery'>
                            {project.screenshots.map((img)=>(
                                <img key={img} src={img} alt='Project pictures'/>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectDetail;