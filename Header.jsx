// One component per file
// Filename = component name (Card.jsx → Card)
// Components → export default
// Hooks, utils, constants → export (named)

function Header() {
  return (
    <header className="header">
      <img src="react.png" className="react-logo" alt="react-header-img"></img>
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
