import { Link } from "react-router-dom";

type ProjectCardProps = {
    title: string;
    description: string;
    slug: string;
    image: string;
};
function ProjectCard({ title, description, slug, image}: ProjectCardProps){
    return(
        <Link to={`/projects/${slug}`} className="project-card">
            <div className="project-image">
                <img src={image} alt={title}/>
            </div>

            <div className="project-content">
                <h4>{title}</h4>
                <p>{description}</p>

                <span className="view-more"> View Details → </span>
            </div>
        </Link>
    )
}
export default ProjectCard;