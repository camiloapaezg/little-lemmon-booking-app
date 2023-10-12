import logo from "../assets/logo_footer.png";
import { IconFacebook, IconInstagram, IconTwitter } from "./Icons";

const goToSection = (sectionId) => {
  let result = document.getElementById(sectionId);
  if (!result) {
    return;
  }

  result.scrollIntoView({ behavior: "smooth" });
};

const FooterNavigationGroup = (props) => {
  return (
    <div className="section-footer-group-container">
      <div className="section-footer-group-header">
        <h4 className="highlight-text">{props.title}</h4>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

const FooterNavigationListItem = (props) => {
  return (
    <li
      className="anchor-tag card-text"
      key={props.section}
      onClick={() => goToSection(props.section)}
    >
      {props.text}
    </li>
  );
};

const Footer = () => {
  const iconStyle = {
    fontSize: "22px",
  };

  return (
    <div id="section-footer-container">
      <div id="section-footer-logo">
        <img src={logo} alt="footer logo" />
      </div>
      <FooterNavigationGroup title="Doormat Navigation">
        <nav>
          <ul>
            <FooterNavigationListItem
              section="section-hero-container"
              text="Home"
            />
            <FooterNavigationListItem
              section="section-about-container"
              text="About"
            />
            <FooterNavigationListItem
              section="section-highlights-container"
              text="Menu"
            />
            <FooterNavigationListItem
              section="section-testimonials-container"
              text="Order Online"
            />
            <FooterNavigationListItem
              section="section-hero-container"
              text="Login"
            />
          </ul>
        </nav>
      </FooterNavigationGroup>
      <FooterNavigationGroup title="Contact">
        <div id="section-footer-contact">
          <div className="section-footer-contact-container">
            <span className="material-icons" style={iconStyle}>
              location_on
            </span>
            <span> 5301 S Hyde Park Blvd, Chicago, IL 60615.</span>
          </div>
          <div className="section-footer-contact-container">
            <span className="material-icons" style={iconStyle}>
              call
            </span>
            <span>+12 345 678 9900</span>
          </div>
          <div className="section-footer-contact-container">
            <span className="material-icons" style={iconStyle}>
              mail
            </span>
            <span>info@littlelemon.com</span>
          </div>
        </div>
      </FooterNavigationGroup>
      <FooterNavigationGroup title="Social Media Links">
        <nav>
          <ul>
            <li key="facebook">
              <a className="anchor-tag" href="https://facebook.com">
                <IconFacebook size="1.5em" />
              </a>
            </li>
            <li key="twitter">
              <a className="anchor-tag" href="https://twitter.com">
                <IconTwitter size="1.5em" />
              </a>
            </li>
            <li key="instagram">
              <a className="anchor-tag" href="https://instagram.com">
                <IconInstagram size="1.5em" />
              </a>
            </li>
          </ul>
        </nav>
      </FooterNavigationGroup>
    </div>
  );
};

export default Footer;
