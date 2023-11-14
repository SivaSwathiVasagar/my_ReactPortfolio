import "./App.css";
import Fall from "./assets/Fall.jpeg";

function App() {
  function scrollToContact() {
    const contactElement = document.getElementById("contactme");

    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="App">
      <div id="home" className="Home">
        <div className="Intro">
          <h2>Hello!👋, </h2>
          <h2>I'm Siva Swathi Vasagar 😊</h2>
          <h4>
            Crafting seamless digital experiences through the fusion of code and
            creativity as a <span className="Role">UX enthusiast </span>
            <span className="UXBracket">(sometimes)</span> and
            <span className="Role"> front-end web developer </span>
            residing in Farmington,MI.
          </h4>
          <div className="ProfileImage">
            <img src={Fall} alt="swathisimage" />
          </div>
          <button className="button" role="button" onClick={scrollToContact}>
            Contact me
          </button>
        </div>
      </div>
      <div id="aboutme" className="AboutMe">
        <h2>About Me 🌸</h2>
        <p>
          <ul className="ULtag">
            <li>
              ➨ Results-driven and dedicated IT professional with 4 years of
              experience as a Jr. Developer in the Insurance industry.
            </li>
            <li>
              ➨ Demonstrated passion for technology and a proactive approach to
              responsibilities.
            </li>
            <li>
              ➨ Known for adaptability and the ability to thrive in dynamic
              environments.
            </li>
            <li>
              ➨ Proficient in legacy service migration, version upgrades, and
              providing reliable production support.
            </li>
            <li>
              ➨ Possesses a solid background in HTML, CSS, JavaScript, React,
              Node.js and Express backed by practical hands-on expertise from
              Per Scholas training.
            </li>
            <li>➨ A team player who excels at collaborative efforts.</li>
          </ul>
        </p>
        <div id="education" className="Education">
          <h2>Education 👩🏻‍🎓</h2>
          <ul className="ULtag">
            <li>
              <article>
                <h4>➨ Per Scholas, Detroit Campus, MI</h4>
                <p>Software Engineering</p>
                <p>October 2023</p>
              </article>
            </li>
            <li>
              <article>
                <h4>➨ Anna University, Chennai, India</h4>
                <p>
                  Bachelor of Engineering in Electronics and Communication
                  Engineering (GPA: 7.86/10)
                </p>
                <p>April 2017</p>
              </article>
            </li>
          </ul>
        </div>
        <div id="workexp" className="WorkExp">
          <h2>Work Experience 👩🏻‍💼</h2>
          <div className="WorkExpContent">
            <h4>Cognizant Technology Solutions, Chennai, India </h4>
            <h4>Software Developer</h4>
            <h4>November 2017 – May 2021</h4>
          </div>
          <article>
            <ul className="ULtag">
              <li>
                <h4>➨ Problem Solving and Enhancement:</h4>
                <p>
                  Improved functionality, debugged, and resolved production
                  issues, contributing to enhanced system performance and user
                  experience
                </p>
              </li>
              <li>
                <h4>➨ Business Insights and Analysis:</h4>
                <p>
                  Initiated as a Rule Analyst, gaining valuable business
                  insights, and analyzing processes to inform effective
                  technical solutions
                </p>
              </li>
              <li>
                <h4>➨ Development Transition:</h4>
                <p>
                  Seamlessly transitioned to the role of a Junior Developer,
                  spearheading critical projects
                </p>
              </li>
              <li>
                <h4>➨ Complex Problem Solving:</h4>
                <p>
                  Skillfully troubleshot intricate issues, delivering effective
                  resolutions as part of Level 3 support responsibilities
                </p>
              </li>
              <li>
                <h4>➨ Production Support: </h4>
                <p>
                  Played a pivotal role in the successful production release of
                  code
                </p>
              </li>
              <li>
                <h4>
                  ➨ Upgraded Spring Boot projects, enhancing application
                  efficiency and modernizing codebase
                </h4>
              </li>
              <li>
                <h4>
                  ➨ Successfully migrated from Ivy to Gradle, optimizing project
                  build processes and dependencies
                </h4>
              </li>
              <li>
                <h4>
                  ➨ Conducted JUnit migration, ensuring streamlined testing and
                  robust code quality
                </h4>
              </li>
              <li>
                <h4>
                  ➨ Facilitated migration from SVN to GitHub, promoting
                  collaborative code management and version control
                </h4>
              </li>
            </ul>
          </article>
        </div>
      </div>
      <div id="certifications" className="Certifications">
        <h2>My Certifications 👩🏻‍💻</h2>
        <p>
          I have earned several valuable certifications to enhance my skills and
          knowledge in various aspects of design and development. These
          certifications are a testament to my commitment to professional growth
          and proficiency. below are some of the notable certifications I have
          achieved:
        </p>
        <ul className="ULtag">
          <li>
            <b> 👉🏻 Google UX Design Certification</b> : Coursera -
            <a
              href="https://www.coursera.org/account/accomplishments/professional-cert/GR763K8SLTVH"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certification Link
            </a>
          </li>
          <li>
            <b> 👉🏻 Adobe Illustrator CC</b> : Essentials Training Course - Udemy
            -
            <a
              href="https://www.udemy.com/certificate/UC-c1a40fe2-ec5f-4e5b-a912-51e639ae1ff5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certification Link
            </a>
          </li>
          <li>
            <b> 👉🏻 Design for the 21st Century with Don Norman</b> : The
            Interaction Design Foundation -{" "}
            <a
              href="https://www.interaction-design.org/members/siva-swathi-vasagar/certificate/course/0a8ba4a8-31d2-4ad3-bbd1-91e3a6af87b0?certificateType=course"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certification Link
            </a>
          </li>
          <li>
            <b> 👉🏻 Introduction to Front-End Development(META)</b> : Coursera -{" "}
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/ZXQ3YP3RKWP8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certification Link
            </a>
          </li>
          <li>
            <b> 👉🏻 Programming with JavaScript(META)</b> : Coursera -
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/7JCDM69DZACW"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certification Link
            </a>
          </li>
          <li>
            <b> 👉🏻 React basics(META)</b> : Coursera -
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/M2PQMKAD6RbH"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certification Link
            </a>
          </li>
        </ul>
      </div>
      <div id="projects" className="Projects">
        <h2>My Projects 💻 🚀</h2>
        <p>
          These project has been a labor of love, born out of my journey as a
          passionate learner at Per Scholas. My goal is to combine my evolving
          skills in both the design industry and software engineering to deliver
          an exceptional fitness experience as a front-end web engineer.
        </p>

        <ul className="ULtag">
          <li>
            <h3> ➳ Workout Generator (MERN) 🏋🏻‍♀️ 🏃🏻‍♀️</h3>
            <h4>App Description :</h4>
            <p>
              This is a tool for generating workout , your personalized fitness
              companion! This tool empowers you to craft customized workout
              routines tailored to your fitness goals. Simply select your target
              muscle group, and our capability to produce two exercises tailored
              to each proficiency level upon your selection of a specific muscle
              group. Get ready to transform your fitness journey with Workout
              Generator.
            </p>
            <ul className="ULtag">
              <li>
                ➠ Github repo link :{" "}
                <a
                  href="https://github.com/SivaSwathiVasagar/WorkoutGenrator_MERN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Workout Generator
                </a>
              </li>
              <li>
                ➠ The hosted webpage for this project is available on Render :{" "}
                <a
                  href="https://frontend-mh29.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Workout Generator UI on Render
                </a>
              </li>
              <li>
                (backend server might be in sleep mode but frontend UI will be
                live)
              </li>
            </ul>
          </li>
          <li>
            <h3> ➳ Jeopardy Quiz 🏆 🥇 🥈</h3>
            <h4>App Description :</h4>
            <p>
              Jeopardy is an engaging quiz game that challenges your knowledge
              across various categories. In this game, I've selected categories
              such as Space, General Knowledge, and Geography.
            </p>
            <ul className="ULtag">
              <li>
                ➠ Github repo link :{" "}
                <a
                  href="https://github.com/SivaSwathiVasagar/Jeopardy_Game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jeopardy Quiz
                </a>
              </li>
              <li>
                ➠ The hosted webpage for this project is available on GitHub
                Pages :{" "}
                <a
                  href="https://sivaswathivasagar.github.io/Jeopardy_Game/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jeopardy Quiz on GitHub Pages
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="contactme" className="Contactme">
        <h2>Where to reach me:</h2>
        <p>Feel free to connect with me through the following channels:</p>
        <ul className="ULtag">
          <li>➠ Email : sivaswathi.vasagar@gmail.com</li>
          <li>
            ➠ Linkedin :
            <a
              href="https://www.linkedin.com/in/siva-swathi-v-468429196/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Linkedin URL
            </a>
          </li>
          <li>
            ➠ GitHub :
            <a
              href="https://github.com/SivaSwathiVasagar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Github URL
            </a>
          </li>
          <li>
            ➠ Behance :
            <a
              href="https://www.behance.net/sivaswathi2007"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Behance URL
            </a>
          </li>
        </ul>
        <p>
          I'm open to discussions, feedback, and collaboration opportunities.
          Let's connect and explore the exciting possibilities that lie ahead in
          the world of fitness and technology.
        </p>
      </div>
    </div>
  );
}

export default App;
