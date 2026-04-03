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
            <strong>Email:</strong> jennythao117@gmail.com
          </p>
          <p>
            <strong>Resume:</strong>{' '}
             <a href="/VoJennyResume2026.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/jennyvooo" target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;