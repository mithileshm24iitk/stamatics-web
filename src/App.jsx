import bgImage from "./assets/home_background.jpg";
import "./App.css";

function App() {
  return (
    <div
      className="hero-root"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay" />

      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">
          {/* LEFT: LOGO AT TOP LEFT */}
          <div className="logo">
            <div className="logo-mark" />
            <div className="logo-text">
              <span className="logo-title">Davon.</span>
              <span className="logo-subtitle">Business Consulting School</span>
            </div>
          </div>

          {/* RIGHT: ACTIONS ON TOP ROW, LINKS ON ROW BELOW, RIGHT-ALIGNED */}
          <div className="nav-right">
            <div className="nav-actions">
              <button className="nav-login">Log In</button>
              <button className="nav-cta">Enroll Now</button>
            </div>

            <nav className="nav-links">
              <a href="#who">Who We Are</a>
              <a href="#modules">Learning Modules</a>
              <a href="#resources">Resources</a>
              <a href="#team">Our Team</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN HERO CONTENT */}
      <main className="hero-content">
        {/* LEFT: MAIN TEXT CENTERED VERTICALLY IN PAGE */}
        <section className="hero-left">
          <h1 className="hero-title">
            Davon Online School of
            <br />
            Business Consulting
          </h1>
          <p className="hero-subtitle">
            The destination for leaders who seek to change the world.
          </p>
          <button className="hero-button">Enroll Now</button>
        </section>

        {/* RIGHT: LATEST BLOGS INSTEAD OF SUBSCRIBE */}
        <section className="hero-right">
          <div className="newsletter-card">
            <h3 className="newsletter-title">Latest Blogs</h3>

            <div className="blog-list">
              <article className="blog-item">
                <h4 className="blog-title">
                  5 Consulting Frameworks Every Leader Should Know
                </h4>
                <p className="blog-meta">Strategy · 8 min read</p>
                <button className="blog-link">Read more →</button>
              </article>

              <article className="blog-item">
                <h4 className="blog-title">
                  How to Turn Complex Data into Clear Decisions
                </h4>
                <p className="blog-meta">Analytics · 6 min read</p>
                <button className="blog-link">Read more →</button>
              </article>

              <article className="blog-item">
                <h4 className="blog-title">
                  Building High-Trust Client Relationships
                </h4>
                <p className="blog-meta">Leadership · 7 min read</p>
                <button className="blog-link">Read more →</button>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* SCROLL ARROW */}
      <div className="scroll-indicator">
        <span className="scroll-arrow">↓</span>
      </div>
    </div>
  );
}

export default App;
