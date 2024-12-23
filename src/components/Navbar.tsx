import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="hidden xl:flex">
      <ul>
        <li><a href="/">Home 
            </a>
        </li>
        <li><a href = "/about">About Us</a>

        </li>
        <li><a href="/catalog">Catalog</a>
        </li>

        <li><a href="/faq">FAQ </a>
        </li>
        <li><a href = "/contact"> Contact Us </a></li>
      </ul>
      </div>
      <div className="flex xl:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
