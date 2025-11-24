import { profile } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>(c) {new Date().getFullYear()} {profile.name}. Built with React + Vite.</p>
      <div className="site-footer__links">
        {profile.social.map((item) => (
          <a key={item.label} href={item.url} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
