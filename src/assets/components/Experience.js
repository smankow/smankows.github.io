// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";

const Experience = ({ theme }) => {
    const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

    return (
        <section id="experience" className={newTheme}>
            <div className="container text-center">
                <h2>Experience</h2>
                <hr />
                <div className="experience-container">
                    <div className="experience-container-card">
                        <h3>Balance Innovations, LLC</h3>
                        <h5>React Developer</h5>
                        <h5>February 2021 - Current</h5>
                        <ul>
                            <li>
                                Designed and built a reliable and responsive web application that is compatible with various browsers using React, Javascript, HTML, CSS, Redux, Webpack and Babel.
                            </li>
                            <li>
                                Developed reusable React components for the web application through effective management of unidirectional data flow via props and state.
                            </li>
                            <li>
                            Made reusable components using React and Material UI library based on UI mock-ups provided by UI/UX designer.
                            </li>
                            <li>
                            Used Redux for state management and state sharing across components and the selector library Reselect in order to avert unnecessary updating.
                            </li>
                            <li>
                                Utilized Node Package Manager to install useful libraries and development tools.
                            </li>
                            <li>
                                Used Git to manage version control of the project in order to avoid unexpected conflicts from code commits.
                            </li>
                            <li>
                                Ran unit tests for the application using Jest and React Testing Library.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-container-card">
                        <h3>Wakefern Food Corporation</h3>
                        <h5>Front End Developer</h5>
                        <h5>December 2018 - January 2021</h5>
                        <ul>
                            <li>
                                Built reusable UI components for future use in frontend projects including inputs, buttons, and data forms.
                            </li>
                            <li>
                                Developed UI prototypes that could be clicked while refurbishing the existing website by adding new features utilizing HTML5 and CSS3.
                            </li>
                            <li>
                                Used Redux to utilize global state maintenance and the sharing of stateless data in components for the single page application.
                            </li>
                            <li>
                                Created screening cases and wrote unit-tests using testing tools such as Jest and React Testing Library.
                            </li>
                            <li>
                                Used Jest and React Testing Library together in order to fulfill test cases for components.
                            </li>
                            <li>
                                Utilized React Router to provide a smooth user experience in an SPA with low loading times.
                            </li>
                            <li>
                                Made use of NPM to use tools like Babel, Webpack and ESLint to upkeep code formatting and browser compatibility.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Link className="scroll" to="contact" smooth={true} duration={750}>
                <FaChevronCircleDown id="scroll-down" />
            </Link>
        </section>
    );
};

export default Experience;