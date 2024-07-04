// import React from "react";
// import "../../styles/footer.css";

// const FooterComponent = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="left-side">
//           Copyright &copy; 2023 Financial Services, Inc. All Rights Reserved
//         </div>
//         <div className="right-side">
//           <a href="https://mlhuillier.com/about-m-lhuillier-financial-services">
//             About Us
//           </a>{" "}
//           &nbsp;&nbsp;{" "}
//           <a href="https://mlhuillier.com/privacy-notice/">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// };


// export default FooterComponent;


import React from "react";
import { FacebookOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { YoutubeOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { TikTokOutlined } from "@ant-design/icons";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { AppstoreOutlined } from "@ant-design/icons";
import logoImage from "../../assets/images/mlLogo.png";
import "../../styles/footer.css"

const FooterComponent = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-section contact-section">
            <img src={logoImage} alt="ML Huillier Logo" />
            <p>
            <MailOutlined  className="gmail"/>
              customercare@mlhuillier.com
            </p>
            <div className="social-icons">
              <a href="#">
              <FacebookOutlined />
              </a>
              <a href="#">
              <TwitterOutlined />
              </a>
              <a href="#">
              <InstagramOutlined />
              </a>
              <a href="#">
              <YoutubeOutlined />
              </a>
              <a href="#">
              <TikTokOutlined />
              </a>
             
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-header">Quick Links</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Online Services</a>
              </li>
              <li>
                <a href="#">Products & Services</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-header">Support</h4>
            <ul className="footer-list">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Notice</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footer-section download-links">
            <h4 className="footer-header">Download</h4>
            <a href="#">
            <FacebookOutlined />
            </a>
            <a href="#">
            <AppstoreAddOutlined />
            </a>
            <a href="#">
            <AppstoreOutlined />
            </a>
          </div>
        </div>
      </footer>

      <footer className="new-footer-container">
        <p className="copyright-text">
          Copyright © 2024 ML Huillier Financial Services, Inc. All Rights
          Reserved.
        </p>
        <div className="legal-links">
          <a href="#">About Us</a>
          <a href="#">Privacy Notice</a>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;