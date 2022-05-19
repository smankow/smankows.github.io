import { useState, useEffect } from "react";
import { githubUsername } from "../../data";
import { AppLoading, AppError } from "../components/appLoadingError";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
// import Projects from "./Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  // Change the defualt theme below ("dark" or "light")
  const [theme, setTheme] = useState("dark");

  const apiUrl = `https://api.github.com/users/${githubUsername}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          setError(response.statusText);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setData(data);
        document.title = data.name;
        // Comment out setIsLoading below to test Loading screen with a valid username (may require reloading the page)
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [apiUrl]);

  if (isLoading) {
    return <AppLoading theme={theme} />;
  }

  if (isError) {
    return <AppError theme={theme} error={error} />;
  }

  const homeData = {
    avatar: data.avatar_url,
    githubUrl: data.html_url,
    // name: data.name,
    name: 'Sam Mankowski',
    link: data.blog,
    bio: data.bio,
    twitter: data.twitter_username,
  };

  return (
    <>
      <About theme={theme} setTheme={setTheme} {...homeData} />
      <main>
        <Education theme={theme} />
        <Skills theme={theme} />
        {/* <Projects theme={theme} githubUsername={githubUsername} /> */}
        <Experience theme={theme} />
        <Contact theme={theme} avatar={homeData.avatar} name={homeData.name} />
      </main>
      {/* <Footer
        githubUrl={homeData.githubUrl}
        link={homeData.link}
        twitter={homeData.twitter}
      /> */}
    </>
  );
};

export default App;
