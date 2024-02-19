import './Footer.scss'

const Footer = () => {
  return (
    <footer>
    <h2 className="footer-h">About Us</h2>
    <ul className="footer-list">
      <li className="footer-link"><a className="link-a" href="#">Careers</a></li>
      <li className="footer-link"><a className="link-a" href="#">Our Stores</a></li>
      <li className="footer-link"><a className="link-a" href="#">Our Cares</a></li>
      <li className="footer-link">
        <a className="link-a" href="#">Terms & Conditions</a>
      </li>
      <li className="footer-link">
        <a className="link-a" href="#">Privacy Policy</a>
      </li>
      <li className="footer-link"><a className="link-a" href="#">Custom Care</a></li>
      <li className="footer-link"><a className="link-a" href="#">Help Center</a></li>
      <li className="footer-link"><a className="link-a" href="#">How to Buy</a></li>
      <li className="footer-link">
        <a className="link-a" href="#">Track Your Order</a>
      </li>
      <li className="footer-link">
        <a className="link-a" href="#">Corporate & Bulk Purchasing</a>
      </li>
      <li className="footer-link">
        <a className="link-a" href="#">Returns & Funds</a>
      </li>
      <li className="footer-link"><a className="link-a" href="#">Contact Us</a></li>
    </ul>

    <div className="contact-info">
      <p>70 Washington Square South, New York, NY 10012, United States</p>
      <p>Email: rootroof.help@gmail.com</p>
      <p>Phone: +1 1123 456 780</p>
    </div>

    <div className="icons">
      <img src="./image/f.svg" alt="Icon 1" />
      <img src="/image/twitter-x.svg" alt="Icon 2" />
      <img src="/image/instagram.svg" alt="Icon 3" />
      <img src="/image/threads.svg" alt="Icon 4" />
    </div>
  </footer>
  )
}

export default Footer