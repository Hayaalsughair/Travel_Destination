// CSS File 
import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="content">
        <h3>By Haya 🤍</h3>
        <p>© 2024 All rights reserved.</p>
        <div className="socials">
          <a href="https://www.facebook.com/authorname" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.twitter.com/authorname" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/in/authorname" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );

}
export default Footer;
