// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";

const Education = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  return (
    <section id="education" className={newTheme}>
      <div className="container text-center">
        <h2>Education</h2>
        <hr />
        <div className="education-container">
          <h3>University of Hartford</h3>
          <h5>Bachelor of Science in Computer Science</h5>
          <h5>September 2015 - May 2019</h5>
          <ul>
              <li>3.4 GPA</li>
              <li>Minor in Math</li>
              <li>One of only 27 students in the College of Arts & Sciences to achieve Bachelor of Science in 2019</li>
          </ul>
        </div>
      </div>
      <Link className="scroll" to="skills" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link>
    </section>
  );
};

export default Education;