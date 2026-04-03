import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page hero-page">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Digital Media Student • UX/UI • Design • Visual Work</p>
          <h1>Hi, I’m Jenny.</h1>
          <p className="hero-text">
            I’m a digital media student and soon-to-be graduate with experience in visual design,
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
            <li>UX/UI and Figma projects</li>
            <li>Graphic and layout design</li>
            <li>3D design work</li>
            <li>Charcoal and traditional artwork</li>
            <li>Selected web projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;