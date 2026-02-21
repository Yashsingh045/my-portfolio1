import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">

      <hr className="divider" />

      <div className="footer--content--container">
        <div >
          <img src="./images/logo1.jpeg" alt="Logo" style={{ borderRadius: "30%", marginLeft: "30px" }} />
        </div>
        <p className="footer--content">Created By Yash | © 2026 All Rights Reserved.™</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
          <a href="https://codeforces.com/profile/YashSingh_045">
            <img src="./images/codeforces.png" alt="Codeforces" style={{ borderRadius: "50%" }} />
          </a>
          <a href="https://leetcode.com/u/YashSingh_045/">
            <img src="./images/leetcode.png" alt="Leetcode" style={{ borderRadius: "50%" }} />
          </a>
          <a href="https://github.com/Yashsingh045">
            <img src="./images/github.png" alt="Github" style={{ borderRadius: "50%" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;