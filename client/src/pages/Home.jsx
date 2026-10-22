import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Zap,
  LockKeyhole,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import "./Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Authentication",
      description:
        "Keep your account protected with a secure and reliable authentication experience.",
    },
    {
      icon: <Zap size={28} />,
      title: "Fast & Simple",
      description:
        "Enjoy a smooth, responsive interface designed to make getting started effortless.",
    },
    {
      icon: <LockKeyhole size={28} />,
      title: "Privacy First",
      description:
        "Build confidence with an account experience focused on privacy and protection.",
    },
  ];

  return (
    <div className="home-page">
      {/* Navbar */}
      <header className="home-header">
        <nav className="home-navbar">
          <Link to="/" className="brand">
            <span className="brand-icon">
              <ShieldCheck size={24} />
            </span>
            <span>Auth<span className="brand-highlight">Flow</span></span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

            <div className="nav-actions">
              <Link
                to="/login"
                className="nav-login"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="nav-register"
                onClick={() => setMenuOpen(false)}
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              Simple. Secure. Reliable.
            </div>

            <h1>
              Your digital world,
              <span> secured beautifully.</span>
            </h1>

            <p className="hero-description">
              A smarter way to manage your account. Sign in securely,
              create your account in seconds, and enjoy a seamless
              experience on every device.
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="primary-button">
                Create Your Account <ArrowRight size={19} />
              </Link>
              <Link to="/login" className="secondary-button">
                Sign In
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-icon">
                <CheckCircle2 size={18} />
              </div>
              <p>Easy to use <span>·</span> Built for a smoother experience</p>
            </div>
          </div>

          {/* Decorative visual */}
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-glow"></div>

            <div className="security-card">
              <div className="security-card-top">
                <div className="security-logo">
                  <ShieldCheck size={30} />
                </div>
                <span className="secure-label">ACCOUNT SECURITY</span>
              </div>

              <div className="security-illustration">
                <div className="illustration-ring ring-one"></div>
                <div className="illustration-ring ring-two"></div>
                <div className="shield-shape">
                  <ShieldCheck size={70} strokeWidth={1.5} />
                </div>
                <div className="floating-check check-one">
                  <CheckCircle2 size={21} />
                </div>
                <div className="floating-check check-two">
                  <LockKeyhole size={20} />
                </div>
              </div>

              <div className="security-card-bottom">
                <div>
                  <strong>Your account</strong>
                  <p>One simple place to begin</p>
                </div>
                <span className="verified-pill">
                  <span></span> Ready
                </span>
              </div>
            </div>

            <div className="floating-note note-top">
              <span className="note-icon"><Zap size={18} /></span>
              <div>
                <strong>Quick & easy</strong>
                <p>A smooth experience</p>
              </div>
            </div>

            <div className="floating-note note-bottom">
              <span className="note-icon note-icon-green">
                <ShieldCheck size={18} />
              </span>
              <div>
                <strong>Security matters</strong>
                <p>Designed with care</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="section-eyebrow">WHY AUTHFLOW?</span>
            <h2>Everything you need to get started</h2>
            <p>
              A thoughtful account experience that keeps things simple
              without compromising on what matters.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className={`feature-icon feature-icon-${index + 1}`}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#about" className="feature-link">
                  Learn more <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" id="about">
          <div className="cta-content">
            <span className="section-eyebrow">YOUR NEXT STEP</span>
            <h2>Ready to get started?</h2>
            <p>
              Create your account and take the first step toward a
              simpler digital experience.
            </p>
            <Link to="/register" className="cta-button">
              Create Free Account <ArrowRight size={18} />
            </Link>
          </div>
          <div className="cta-decoration cta-decoration-one"></div>
          <div className="cta-decoration cta-decoration-two"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <Link to="/" className="brand footer-brand">
          <span className="brand-icon">
            <ShieldCheck size={21} />
          </span>
          <span>Auth<span className="brand-highlight">Flow</span></span>
        </Link>

        <p>© {new Date().getFullYear()} AuthFlow. Built for a better experience.</p>

        <div className="footer-links">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Register</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;