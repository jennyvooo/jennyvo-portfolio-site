import { useState } from 'react';

const projects = [
  {
    title: 'Clearth',
    category: 'UX/UI Design',
    medium: 'Figma, UX/UI, Team Project',
    description:
      'A team project where we conceptualized a sustainability app that helps users locate cleaning events on a map, track their environmental impact, and earn rewards for participation.',
    images: ['/images/clearth.png'],
    figmaLink: 'https://www.figma.com/proto/7Qp5JASk98FarE2qFYygpa/CLEARTH?node-id=393-1124&starting-point-node-id=393%3A1124&t=i0n3KkVvG6nL42Nr-1',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'Goblin Gizmos',
    category: 'UX/UI Design',
    medium: 'Web Design, UX/UI, Team Capstone Project',
    description:
      'A capstone team project for hobbyists to share their collections with their community through posts. Users can also upload bounties to potentially sell items through personal transactions outside of the site.',
    images: ['/images/goblinLogo.png'],
    figmaLink: 'https://www.figma.com/proto/46bklatue2LniKF7D1sEWA/Goblin-Gizmos---HiFi-Desktop?node-id=1-2&p=f&t=jeS6Phb15qc4yLae-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'myUCF Student Site UX/UI Redesign',
    category: 'UX/UI Design',
    medium: 'Figma, UX/UI Redesign',
    description:
      'A redesign of UCF’s student services site focused on improving usability, clarity, and the overall student experience.',
    images: ['/images/Frame 1.jpg'],
    figmaLink: '',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'Amazon Product Listing UX/UI Redesign',
    category: 'UX/UI Design',
    medium: 'Figma, UX/UI Redesign',
    description:
      'A redesign of Amazon’s product listing layout intended to make the experience more accessible, readable, and accommodating to users.',
    images: ['/images/AmazonRedesign.png'],
    figmaLink: 'https://www.figma.com/design/UVwiJEo6WctSMRuDsOkoYy/Amazon-Product-Page-Redesign?node-id=0-1&t=4Tcm36YqexbEizPP-1',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'Orlando Stamp Project',
    category: 'Graphic Design',
    medium: 'Graphic Design, Mockup Design',
    description:
      'A stamp design created for the city of Orlando, along with mockup images showing how the design could appear in presentation materials.',
    images: [
      '/images/orlando-stamp-1.jpg',
      '/images/orlando-stamp-2.jpg',
      '/images/orlando-stamp-3.jpg'
    ],
    figmaLink: '',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'Grenadier Graphics',
    category: 'Graphic Design',
    medium: 'Branding, Stylescape',
    description:
      'A stylescape created for a high school graphic design branding project. It explores visual identity, brand mood, and design direction.',
    images: ['/images/grenadier-graphics.jpg'],
    figmaLink: '',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'OCPS Top Talent — Drowning in the City',
    category: 'Digital Art',
    medium: 'Photoshop, Digital Composition',
    description:
      'A digital artwork titled “Drowning in the City” that was submitted to the annual OCPS Top Talent visual arts show and placed as a top 5 finalist.',
    images: ['/images/drowning-in-the-city.jpg'],
    figmaLink: '',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'HouRewards Logo Design',
    category: 'Graphic Design',
    medium: 'Logo Design, Branding',
    description:
      'A logo and mockup series created for a team project concept called HouRewards, an app designed to help students track volunteering hours for scholarship opportunities.',
    images: [
      '/images/hourewards-1.jpg',
      '/images/hourewards-2.jpg',
      '/images/hourewards-3.jpg'
    ],
    figmaLink: '',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'Dark Memories',
    category: 'Traditional Art',
    medium: 'Charcoal Drawing',
    description:
      'A charcoal drawing that explores contrast, atmosphere, and hand-rendered detail through traditional media.',
    images: ['/images/dark-memories.jpg'],
    figmaLink: '',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'Metamorphic',
    category: 'Traditional Art',
    medium: 'Charcoal Drawing',
    description:
      'A charcoal drawing focused on transformation, texture, and visual depth through observational rendering techniques.',
    images: ['/images/metamorphic.jpg'],
    figmaLink: '',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'Self Portrait',
    category: 'Traditional Art',
    medium: 'Charcoal Drawing',
    description:
      'A self-portrait created in charcoal that demonstrates observation, shading, and realism through traditional drawing methods.',
    images: ['/images/self-portrait.jpg'],
    figmaLink: '',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'The Boxes Lie',
    category: '3D Design',
    medium: '3D Design, Sculpture',
    description:
      'A stack of realistic cardboard boxes made from wood, inspired by Andy Warhol’s Brillo Box sculptures and focused on illusion, form, and material transformation.',
    images: [
      '/images/the-boxes-lie-1.JPG',
      '/images/the-boxes-lie-2.jpg',
      '/images/the-boxes-lie-3.jpg'
    ],
    figmaLink: '',
    liveLink: '',
    githubLink: '',
    featured: true
  },
  {
    title: 'Digital Still-life',
    category: 'Digital Art',
    medium: 'Photoshop, Digital Painting',
    description:
      'A digital still-life painting created in Photoshop, exploring color, light, and texture through digital media.',
    images: ['/images/digital-still-life.JPG'],
    figmaLink: '',
    liveLink: '',
    githubLink: '',
    featured: true
  }
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const visibleProjects = projects.filter((project) => project.featured);

  const categories = [
    'All',
    ...new Set(visibleProjects.map((project) => project.category))
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? visibleProjects
      : visibleProjects.filter((project) => project.category === selectedCategory);

  function openProject(project) {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  }

  function closeProject() {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  }

  function showNextImage() {
    if (!selectedProject) return;

    setSelectedImageIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function showPreviousImage() {
    if (!selectedProject) return;

    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  }

  return (
    <section className="page">
      <div className="container">
        <h1>Projects</h1>
        <p className="section-intro">
          This portfolio includes UX/UI work, graphic design, digital art, traditional media, and
          3D design. Click any project to view more details and images.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginTop: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.7rem 1rem',
                borderRadius: '999px',
                border: '1px solid #222',
                backgroundColor: selectedCategory === category ? '#222' : '#fff',
                color: selectedCategory === category ? '#fff' : '#222',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article
              className="project-card"
              key={project.title}
              style={{ cursor: 'pointer' }}
              onClick={() => openProject(project)}
            >
              {project.images.length > 0 && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="project-image"
                />
              )}

              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h2>{project.title}</h2>
                <p>
                  <strong>Medium:</strong> {project.medium}
                </p>
                <p>{project.description}</p>

                <div className="project-links">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      openProject(project);
                    }}
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.1rem',
                      borderRadius: '8px',
                      border: '1px solid #222',
                      backgroundColor: '#fff',
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}
                  >
                    View Project
                  </button>

                  {project.figmaLink && (
                    <a
                      href={project.figmaLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      View Figma
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      View Site
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          onClick={closeProject}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            zIndex: 1000
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              backgroundColor: '#fff',
              width: '100%',
              maxWidth: '1000px',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '16px',
              padding: '1.5rem',
              position: 'relative'
            }}
          >
            <button
              onClick={closeProject}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: '#222',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '0.6rem 0.9rem',
                cursor: 'pointer'
              }}
            >
              Close
            </button>

            <p className="project-category">{selectedProject.category}</p>
            <h2 style={{ marginBottom: '0.75rem', paddingRight: '4rem' }}>
              {selectedProject.title}
            </h2>
            <p style={{ marginBottom: '0.75rem' }}>
              <strong>Medium:</strong> {selectedProject.medium}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>{selectedProject.description}</p>

            {selectedProject.images.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <img
                  src={selectedProject.images[selectedImageIndex]}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    maxHeight: '500px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    backgroundColor: '#f4f4f4'
                  }}
                />

                {selectedProject.images.length > 1 && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      marginTop: '1rem'
                    }}
                  >
                    <button
                      onClick={showPreviousImage}
                      style={{
                        padding: '0.7rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid #222',
                        backgroundColor: '#fff',
                        cursor: 'pointer'
                      }}
                    >
                      Previous
                    </button>

                    <p>
                      Image {selectedImageIndex + 1} of {selectedProject.images.length}
                    </p>

                    <button
                      onClick={showNextImage}
                      style={{
                        padding: '0.7rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid #222',
                        backgroundColor: '#fff',
                        cursor: 'pointer'
                      }}
                    >
                      Next
                    </button>
                  </div>
                )}

                {selectedProject.images.length > 1 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      marginTop: '1rem'
                    }}
                  >
                    {selectedProject.images.map((image, index) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${selectedProject.title} thumbnail ${index + 1}`}
                        onClick={() => setSelectedImageIndex(index)}
                        style={{
                          width: '90px',
                          height: '90px',
                          objectFit: 'cover',
                          borderRadius: '10px',
                          border:
                            selectedImageIndex === index
                              ? '3px solid #222'
                              : '1px solid #ccc',
                          cursor: 'pointer'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="project-links">
              {selectedProject.figmaLink && (
                <a href={selectedProject.figmaLink} target="_blank" rel="noreferrer">
                  View Figma
                </a>
              )}

              {selectedProject.liveLink && (
                <a href={selectedProject.liveLink} target="_blank" rel="noreferrer">
                  View Site
                </a>
              )}

              {selectedProject.githubLink && (
                <a href={selectedProject.githubLink} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;