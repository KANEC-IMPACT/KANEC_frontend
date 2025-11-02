import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Story', path: '/about' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' }
      ],
    },
    {
      title: 'Browse',
      links: [
        { name: 'Browse Projects', path: '/projects' },
        { name: 'Funded Projects', path: '/projects?filter=funded' },
        { name: 'Organizations', path: '/organizations' }
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Documentation', path: '/docs' },
        { name: 'Help Center', path: '/help' },
        { name: 'Whitepaper', path: '/whitepaper' }
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Transparency', path: '/transparency' }
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">K</div>
              <div className="footer-logo-text">
                <span className="footer-logo-main">Kanec Impact Ledger</span>
                <span className="footer-logo-sub">
                  Blockchain-verified impact funding for Africa
                </span>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4 className="footer-title">{section.title}</h4>
              <ul className="footer-links">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Kanec. All rights reserved.
          </p>
          <p className="footer-powered">
            Powered by <span className="footer-hedera">Hedera</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;