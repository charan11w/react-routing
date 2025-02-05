import { Link } from "react-router-dom";

function Header() {
  const logo='https://e1.pngegg.com/pngimages/681/624/png-clipart-naruto-logos-naruto-anime-logo-thumbnail.png'
  return (
    <div className="app">
      <ul >
        <Link to='home' className="cat">
          <li> Home</li>
        </Link>
        <Link to="category" className="cat">
          <li >Category</li>
        </Link>
        <Link to='activity' className="cat">
          <li>Activity</li>
        </Link>
        <Link to='buy' className="cat">
          <li>Buy</li>
        </Link>
        <Link to='sell' className="cat">
          <li>Sell</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;