import "./About.css";

const About = () => {
  return (
    <div>
      <div className="container">
        <div>
        <div className="imageContainer">
          <img className="photo" src="passphoto1.jpg" alt="MYIMAGE" />
          <h2>P.Jayasimha</h2>
        </div>
        <div className="para">
          <p>
            About Fully committed to the philosophy of life-long learning, I’m a
            frontend developer with a deep passion for JavaScript, React and all
            things web development. The unique combination of creativity, logic,
            technology and never running out of new things to discover, drives
            my excitement and passion for web development. When I’m not at my
            computer I like to spend my time playing sport, keeping fit.
          </p>
        </div>
        </div>
        <div className="images">
          <img className="icons" src="python.png" alt="python" />
          <img
            className="icons"
            src="bootstrap-logo-shadow.png"
            alt="bootstrap"
          />
          <img className="icons" src="css-code.png" alt="CSS" />
          <img className="icons" src="git.png" alt="GIT" />
          <img className="icons" src="html-language.png" alt="HTML" />
          <img className="icons" src="java-script.png" alt="JS" />
        </div>
      </div>
    </div>
  );
};

export default About;
