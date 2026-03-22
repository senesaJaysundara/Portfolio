import {useNavigate, useParams} from 'react-router-dom'

const projects = {
    kuddles: {
        title: "kuddles",
        overview: "A mobile application that connects both paernts and nannies, by updating child's activity in real time",
        tech: ["React Native - typescript","Node.js","MongoDB","Firebase"],
        problem: "Parents oftern struggles to find a reliable nanny for their children, and they also want to stay updated with their children's daily activities. On the other hand, nannies also want to have a platform to connect with parents and manage their work more efficiently.",
        solution: "Designs a mobile application with a user friendly interface and real-time updates with clear activity tracking",
        heroImage: "/Portfolio/images/Kuddles.jpg",
        screenshots: [
            "/Portfolio/images/Kuddles-poster.jpg",
            "/Portfolio/images/Kuddles-UI.jpeg",
        ]
    },
    CityNest: {
        title: "CityNest",
        overview: "A web application that allows users to search and filter properties based on their preferences in searching properties",
        tech: ["React Native- JavaScript"],
        problem: "People struggles to find a reliable platform to search for properties that match their preferences, and they also want to have a user-friendly interface to easily navigate through the listings.",
        solution: "Designs a web application with a user friendly interface that search and filter the properties",
        heroImage: "/Portfolio/images/citynest.png",
        screenshots: [
            "/Portfolio/images/citynest-properties.png",
            "/Portfolio/images/citynest-property-details.png",
        ]
    },
    GoodHealthandWellbeing: {
        title: "Good Health and Well-being",
        overview: "A website about the UN SDGS goal 'Good Health and Well-being' to promote about health communities and healthy lifecycle",
        tech: ["HTML","CSS"],
        problem: "Many people are not aware of the importance of good health and well-being, and they also lack access to reliable information about how to maintain a healthy lifestyle.",
        solution: "Designs a web application with a user friendly interface that promotes health and well-being information",
        heroImage: "/Portfolio/images/good-health.png",
        screenshots:[
            "/Portfolio/images/good-health-splash.png",
            "/Portfolio/images/good-health-page.png",
        ]
    },
    SalesAnalytics: {
        title: "Sales Data Analysis",
        overview: "An Excel-based data analytics project analyzing sales performance to uncover trends, top-performing products, and regional insights.",
        tech: ["Microsoft Excel","Pivot Tables","Data Cleaning","Data Visualization"],
        problem: "Business often struggle to understand sales trends and identify top-performing products and regions due to unstructured data.",
        solution: "Cleaned and analyzed sales data using Excel, created pivot tables and dashboards, and generated insights to support data-driven decision-making.",
        heroImage: "/Portfolio/images/sales-dashboard.png",
        screenshots:[
            "/Portfolio/images/sales-chart1.png",
            "/Portfolio/images/sales-chart2.png",
            "/Portfolio/images/sales-chart3.png"
        ]
    },
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

                {slug === "SalesAnalytics" && (
                    <div className='project-section'>
                        <h3>Key Insights</h3>
                        <ul>
                            <li>Observed monthly sales trends and seasonal patterns</li>
                            <li>Indetified top-performing products contributing the highest revenue</li>
                            <li>Analyzed region-wise sales performance</li>
                            <li>Generated insights to support business decision-making</li>
                        </ul>
                    </div>
                )}

                {slug == "SalesAnalytics" && (
                    <div className='project-section report-download-section'>
                        <h3>Project Documentation</h3>
                        <a 
                        href='/Portfolio/reports/DA-Project-Report.pdf'
                        target='_blank'
                        className='btn-primary'> View Full Analysis Report</a>
                    </div>
                )}

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