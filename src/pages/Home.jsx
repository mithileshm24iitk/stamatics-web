// src/pages/Home.jsx
import "../styles/pages/home.css";
import bgImage from "../assets/home_background.jpg";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero-root" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-overlay" />

        <main className="hero-content">
          <section className="hero-left">
            <div className="hero-center">
              <h1 className="hero-title">
                <span>Stamatics</span>
                <br />
                <span>IIT Kanpur</span>
              </h1>

              <p className="hero-subtitle">
                Bring problems. Leave with answers.
              </p>
            </div>
          </section>

          <section className="hero-right" />
        </main>
      </div>

      {/* ABOUT US SECTION (OUTSIDE HERO, BUT VISUALLY OVERLAPS IT) */}
      <section className="about-full">
        <div className="about-full-inner">
          <h2 className="about-full-title">About Us</h2>
          <p className="about-full-text">
            Stamatics is the Mathematics and Statistics society of IIT Kanpur.
            We bring together students who enjoy mathematical thinking, logical
            reasoning, and problem solving beyond the classroom.
          </p>
          <p className="about-full-text">
            Throughout the year, we organise competitions, talks, workshops,
            and collaborative problem-solving sessions to build curiosity,
            community, and a deeper appreciation for mathematics across campus.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
