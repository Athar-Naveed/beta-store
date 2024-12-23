
const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <p>Call us between 10 AM - 8 PM | 0316-1234567</p>
        <p>Pre-Opening Sale: Up to 50% Off | Use code "NEW"</p>
      </div>
      <div className="header-main">
        <div className="logo">Beta Store</div>
        <input type="text" placeholder="Enter a keyword or product SKU" />
        <div className="cart">Cart (0 items)</div>
      </div>
    </div>
  );
};

export default Header;
