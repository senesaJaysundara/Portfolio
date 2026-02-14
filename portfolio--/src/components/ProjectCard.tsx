import { Link } from "react-router-dom";

type ProjectCardProps = {
    title: string;
    description: string;
    slug: string;
};
function ProjectCard({ title, description, slug}: ProjectCardProps){
    return(
        <Link to={`/projects/${slug}`} className="project-card">
            <div className="project-image"></div>

            <div className="project-content">
                <h4>{title}</h4>
                <p>{description}</p>

                <span className="view-more"> View Details → </span>
            </div>
        </Link>
    )
}
export default ProjectCard;