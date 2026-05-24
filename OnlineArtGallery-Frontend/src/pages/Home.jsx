import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-kicker">Curated digital gallery</span>
          <h1 className="hero-title">Online Art Gallery</h1>
          <p className="hero-text">
            Discover, showcase, and celebrate creativity. Artists can upload their masterpieces,
            while art lovers explore, collect, and connect with art from around the world.
          </p>
          <Link to="/artworks" className="hero-btn">Explore Gallery</Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=900&q=80"
            alt="Curated art display"
          />
        </div>
      </section>

      <section className="home-highlights" aria-label="Gallery highlights">
        <div>
          <strong>Original art</strong>
          <span>Browse hand-picked works from emerging artists.</span>
        </div>
        <div>
          <strong>Artist dashboards</strong>
          <span>Upload, manage, and showcase artwork with ease.</span>
        </div>
        <div>
          <strong>Secure checkout</strong>
          <span>Buy pieces through the existing payment flow.</span>
        </div>
      </section>
    </div>
  );
}
