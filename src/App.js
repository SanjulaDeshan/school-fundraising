import React, { useState } from "react";
import "./App.css";

const CONFIG = {
  projectName: "Green Valley School Building Fund",
  tagline: "Help us build classrooms that shape futures",
  goalAmountLKR: 4000000,
  raisedAmountLKR: 450000,
  contact: {
    email: "fundraising@greenvalley.lk",
    phone: "+94 77 123 4567",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop",
  },
  updates: [
    { date: "2025-09-01", text: "Architectural drawings approved by the board." },
    { date: "2025-09-15", text: "Foundation stone laying scheduled for October 5." },
    { date: "2025-09-20", text: "Soil test completed and reviewed." },
  ],
  impactBullets: [
    "Build 4 new classrooms serving 160+ students each year",
    "Accessible facilities and safe learning spaces",
    "STEM lab equipment and library corner",
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
  ],
  youtubeVideos: [
    { id: "dQw4w9WgXcQ", title: "Project Introduction" }, // Only one video
  ],
  reviews: [
    {
      name: "Anura Perera",
      role: "Alumnus, 1998 Batch",
      photo:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop",
      quote:
        "This project will transform learning for generations. I'm proud to support it.",
    },
    {
      name: "Sithara Jayasundara",
      role: "Parent",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      quote:
        "Safe, modern classrooms are the foundation for our children's success.",
    },
    {
      name: "Rev. Karunaratne",
      role: "Community Leader",
      photo:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop",
      quote: "A worthy cause that unites the entire community.",
    },
  ],
};

const fmtLKR = (n) =>
  new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0,
  }).format(n || 0);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const progress = Math.round(
    (CONFIG.raisedAmountLKR / CONFIG.goalAmountLKR) * 100
  );

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">{CONFIG.projectName}</div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#updates" onClick={() => setMenuOpen(false)}>Updates</a>
          <a href="#impact" onClick={() => setMenuOpen(false)}>Impact</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#videos" onClick={() => setMenuOpen(false)}>Video</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <h1>{CONFIG.projectName}</h1>
          <p>{CONFIG.tagline}</p>
          <div className="donate-info">
            <p>🌟 Want to support this cause? 🌟</p>
            <p>
              Contact us to donate: <br />
              📞 {CONFIG.contact.phone} <br />
              📧 {CONFIG.contact.email}
            </p>
            <p>Your contribution will help create a brighter future for children.</p>
          </div>
        </div>
      </header>

      {/* Progress */}
      <section className="progress-section">
        <h2>Fundraising Progress</h2>
        <div className="progress">
          <div className="progress-card">
            Goal
            <strong>{fmtLKR(CONFIG.goalAmountLKR)}</strong>
          </div>
          <div className="progress-card">
            Raised
            <strong>{fmtLKR(CONFIG.raisedAmountLKR)}</strong>
          </div>
          <div className="progress-card">
            Progress
            <strong>{progress}%</strong>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section id="updates">
        <h2>Latest Updates</h2>
        <div className="updates">
          <ul>
            {CONFIG.updates.map((u, i) => (
              <li key={i}>
                <strong>{u.date}</strong> — {u.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Impact */}
      <section id="impact">
        <h2>Impact</h2>
        <div className="impact">
          {CONFIG.impactBullets.map((point, i) => (
            <div key={i} className="impact-card">{point}</div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery">
        <h2>Gallery</h2>
        <div className="gallery">
          {CONFIG.galleryImages.map((img, i) => (
            <img key={i} src={img} alt={`Gallery ${i}`} />
          ))}
        </div>
      </section>

      {/* Video */}
      <section id="videos">
        <h2>Video</h2>
        <div className="youtube-videos single-video">
          <iframe
            src={`https://www.youtube.com/embed/${CONFIG.youtubeVideos[0].id}`}
            title={CONFIG.youtubeVideos[0].title}
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews">
        <h2>Community Reviews</h2>
        {CONFIG.reviews.map((r, i) => (
          <div key={i} className="review">
            <img src={r.photo} alt={r.name} />
            <div>
              <p><strong>{r.name}</strong> ({r.role})</p>
              <blockquote>"{r.quote}"</blockquote>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
