import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      
      <hr className="divider" />
      
      <div className="footer--content--container">
        <div >
            <img src="./images/logo1.jpeg" alt="Logo" style={{borderRadius:"30%",marginLeft:"30px"}}/>
        </div>
        <p className="footer--content">Created By Yash | © 2025 All Rights Reserved.™</p>
        <div>
          <a href="">
            <img src="./images/codeforces.png" alt="Codeforces" />
          </a>
          <a href="">
            <img src="./images/leetcode.png" alt="Leetcode" />
          </a>
          <a href="">
            <img src="./images/github.png" alt="Github" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;