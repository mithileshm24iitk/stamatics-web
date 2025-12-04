// src/pages/Home.jsx

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation


import bgImage from "../assets/home_background.jpg";
import { blogs } from "../data/blogs";   // Import your blog data

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="hero-root"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero-overlay" />

        <main className="hero-content">
          {/* LEFT HERO TEXT */}
          <section className="hero-left">
            <h1 className="hero-title">
              <span>Stamatics</span><br />
              <span>IIT Kanpur</span>
            </h1>
            <p className="hero-subtitle">
              Bring problems. Leave with answers.
            </p>
            <button className="hero-button">Explore Competitions</button>
          </section>

          {/* RIGHT BLOGS PANEL */}
          <section className="hero-right" id="blogs">
            <div className="newsletter-card">
              <h3 className="newsletter-title">Latest Blogs</h3>

              <div className="blog-list">
                {/* Dynamically loop through the blogs from your data file */}
                {blogs.map((blog) => (
                  <article className="blog-item" key={blog.id}>
                    <div className="blog-thumbnail">
                      <img
                        src="https://via.placeholder.com/80x60"
                        alt={blog.title}
                      />
                    </div>
                    <div className="blog-info">
                      <h4 className="blog-title">{blog.title}</h4>
                      <p className="blog-meta">
                        {blog.author} · {blog.date}
                      </p>
                      {/* This Link allows proper navigation to the article */}
                      <Link to={`/blogs/${blog.id}`} className="blog-link">
                        Read more →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* SCROLL ARROW (now static, no animation) */}
        <div className="scroll-indicator">
          <span className="scroll-arrow">↓</span>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            Stamatics is a society of IIT Kanpur under the Department of Mathematics and Statistics. 
            Throughout the year, Stamatics organises mathematical competitions, talks by various professors and students, workshops, and numerous other informal and formal sessions to guide students towards a fruitful life in the campus and outside.
            Aimed at shedding more light and inculcating more interest in Mathematics, as well as making it fun and enjoyable, Stamatics distributes its newsletter full of interesting stuff ranging from groundbreaking scientific research articles to academic guidance by seniors and professors in various fields. 
            In a nutshell, Stamatics is a group of individuals who strive to put all the opportunities, interesting researches, fun puzzles and the guidance of seniors, out in the open for everyone in the campus.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>What We Do</h3>
              <p>
                From Integration Bee and Mathematica to Mathemania, we design
                events that challenge, inspire, and build a strong problem-solving
                culture on campus.
              </p>
            </div>
            <div className="about-card">
              <h3>Who We Are</h3>
              <p>
                A community of students who enjoy puzzles, proofs, probability,
                and everything in between—open to enthusiasts from all
                departments and years.
              </p>
            </div>
            <div className="about-card">
              <h3>Why Join</h3>
              <p>
                Meet like-minded peers, compete in challenging events, learn new
                ideas, and contribute to a growing math community at IIT Kanpur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
