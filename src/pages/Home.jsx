import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page hero-page">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Digital Media • UX/UI • Design • Visual Work</p>
          <h1>Hi, I’m Jenny.</h1>
          <p className="hero-text">
            I’m a digital and Interactive Media student and soon-to-be graduate with experience in visual design,
            UX/UI, front-end development, and creative problem solving. This portfolio highlights
            selected projects, studio work, and evolving digital experiences.
          </p>

          <div className="button-row">
            <Link to="/projects" className="button primary-button">
              View Projects
            </Link>
            <Link to="/about" className="button secondary-button">
              About Me
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <h2>Featured Areas</h2>
          <ul>
            <li>Graphic Design</li>
            <li>UX/UI Design</li>
            <li>Figma Projects</li>
            <li>Web Projects</li>
            <li>Traditional and Digital Art</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;