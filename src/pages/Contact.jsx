function Contact() {
  return (
    <section className="page">
      <div className="container narrow">
        <h1>Contact</h1>
        <p>
          Feel free to reach out for opportunities, collaborations, or questions about my work.
        </p>

        <div className="contact-card">
          <p>
            <strong>Email:</strong> yourname@email.com
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              View Profile
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;