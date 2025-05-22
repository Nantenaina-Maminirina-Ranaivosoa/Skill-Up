import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link> | 
      <Link to="/login">Connexion</Link> | 
      <Link to="/register">Inscription</Link>
    </nav>
  );
}

export default Navbar;
