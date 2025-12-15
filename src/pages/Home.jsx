// src/pages/Home.jsx

import { Link } from "react-router-dom";
import "../styles/pages/home.css";
import bgImage from "../assets/home_background.jpg";

function Home() {
  return (
    <div
      className="hero-root"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay" />

      <main className="hero-content">
        {/* LEFT COLUMN */}
        <section className="hero-left">
          {/* CENTERED TITLE BLOCK */}
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

          {/* ABOUT US (FLOWING BELOW, DOES NOT AFFECT CENTERING) */}
          <div className="about-card about-card-wide">
            <h3>About Us</h3>
            <p>
              Stamatics is the official Mathematics and Statistics society of IIT
              Kanpur. It brings together students who enjoy mathematical
              thinking, logical reasoning, and problem solving beyond the
              classroom.
            </p>
            <p>
              Throughout the year, the society organises competitions, talks by
              professors and researchers, workshops, and collaborative
              problem-solving sessions. These activities aim to build curiosity,
              community, and a deeper appreciation for mathematics across
              campus.
            </p>
          </div>
        </section>

        {/* RIGHT COLUMN (EMPTY FOR BALANCE) */}
        <section className="hero-right" />
      </main>

      <div className="scroll-indicator">
        <span className="scroll-arrow">↓</span>
      </div>
    </div>
  );
}

export default Home;
