import { skillData } from "../../data";
// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";

const Skills = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  return (
    <section id="skills" className={newTheme}>
      <div className="container text-center">
        <h2>Skills</h2>
        <hr />
        <div className="row row-cols-3">
          {skillData.map((skills) => {
            return (
              <figure className="col" key={skills.id}>
                {skills.skill}
                <figcaption>{skills.name}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
      <Link className="scroll" to="experience" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link>
    </section>
  );
};

export default Skills;
