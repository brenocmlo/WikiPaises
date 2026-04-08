// src/components/Card/Card.jsx
import { Link } from 'react-router-dom';
import './Card.css';

// Recebemos a "prop" country com os dados do país
export const Card = ({ country }) => {
  return (
    // Quando clicar, vai para /country/BRA (por exemplo) usando o código cca3
    <Link to={`/country/${country.cca3}`} className="card-container">
      <img 
        src={country.flags.svg} 
        alt={`Bandeira de ${country.name.common}`} 
        className="card-flag" 
      />
      <div className="card-info">
        <h2 className="card-title">{country.name.common}</h2>
        <p className="card-region">{country.region}</p>
      </div>
    </Link>
  );
};