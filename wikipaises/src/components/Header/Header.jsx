import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className="header-logo">WikiPaíses</Link>
    </header>
  );
};