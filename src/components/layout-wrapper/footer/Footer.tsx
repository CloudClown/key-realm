import './Footer.scss'

const Footer = () => {
  return (
    <footer>
    <h2 className="footer-h">About Us</h2>

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