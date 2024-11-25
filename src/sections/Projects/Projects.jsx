import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/project-1.png';
import freshBurger from '../../assets/project-2.png';
import hipsster from '../../assets/project-3.png';
import fitLift from '../../assets/10.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://ofuq-oqa5.vercel.app/about.html"
          h3="project-1"
          p="Academy"
        />
        <ProjectCard
          src={freshBurger}
          link="https://mahmoudhidowi.github.io/-web-design/"
          h3="project-2"
          p="Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/mahmoudHidowi/ecommerce-website"
          h3="project-3"
          p="ecommerce-website"
        />
        <ProjectCard
          src={fitLift}
          link="https://pizza-menu-ten-pearl.vercel.app/"
          h3="project-4"
          p="pizza-menu"
        />
{/*         <ProjectCard
          src={fitLift}
          link="https://mh-plum.vercel.app/"
          h3="project-4"
          p="website"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
