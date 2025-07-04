import HeroImg from "../../assets/images/date.svg";

const HeroSection = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Find Your Perfect
          <br /> Match with
          <br />Merasaathi!</h1>
        <p>Easy matchmaking for everyone.</p>
        <div className="hero-buttons">
          <button className="btn primary">Register</button>
          <button className="btn secondary">Explore</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImg} alt="Hero image" />
      </div>
    </header>
  );
};

export default HeroSection;
