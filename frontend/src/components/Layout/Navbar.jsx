import "../../Stylesheet/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "HOME",
      path: "/",
    },
    {
      label: "FIND MY MATCH",
      path: "/findmatch",
    },
    {
      label: "MY MATCHES",
      path: "/mymatches",
    },
    {
      label: "PROFILE",
      path: "/profile",
    },
  ];

  return (
    <nav className="navbar">
      <div onClick={() => navigate("/")} className="logo">
        MERA SATHI
      </div>

      <ul className="nav-links">
        {menuItems.map((item, index) => (
          <li onClick={() => navigate(item.path)} key={index}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
