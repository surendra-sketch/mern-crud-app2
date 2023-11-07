import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-con">
        <div className="social">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/surendra-singh-573791168/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://surendraportfolioforshowcase.netlify.app/">
                Main Site
              </a>
            </li>
            <li>
              <a href="https://github.com/surendra-sketch">GitHub Account</a>
            </li>
          </ul>
        </div>
        <div className="servises">
          <ul>
            <li>
              <p>Plaese leave a star on github repo</p>
            </li>
            <li>
              <a href="https://react.dev/">React</a>
            </li>
          </ul>
        </div>
      </div>
      <h6>&copy;2023 all rights reserved</h6>
      <h5>Powerd by Surendra Tech</h5>
    </footer>
  );
};

export default Footer;
