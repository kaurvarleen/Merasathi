import '../../Stylesheet/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MERA SATHI</div>
      <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">FIND-MATCH</a></li>
        <li><a href="#contact">MY-MATCH</a></li>
        <li><a href="#search">PROFILE</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
