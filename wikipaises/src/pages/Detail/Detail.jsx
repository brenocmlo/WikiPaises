// src/pages/Detail/Detail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CountriesService } from '../../service/restcountries/countries.service';
import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import './Detail.css';

export const Detail = () => {
  const { code } = useParams();
  
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        const data = await CountriesService.getByCode(code);
        setCountry(data[0]);
      } catch (error) {
        console.error("Erro ao buscar detalhes do país:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchCountryDetail();
  }, [code]); 

  
  if (loading) {
    return (
      <div className="detail-container">
        <h2>Carregando informações do país...</h2>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="detail-container">
        <Link to="/" className="back-button">← Voltar</Link>
        <h2>Ops! País não encontrado.</h2>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-button">← Voltar</Link>
      
      <div className="detail-content">
        <img 
          src={country.flags.svg} 
          alt={`Bandeira de ${country.name.common}`} 
          className="detail-flag" 
        />
        
        <div className="detail-info">
          <h1 className="detail-title">{country.name.common}</h1>
          
          <div className="info-grid">
            <InfoBlock 
              label="Nome Oficial" 
              value={country.name.official} 
            />
            <InfoBlock 
              label="Capital" 
              value={country.capital ? country.capital[0] : 'Não possui'} 
            />
            <InfoBlock 
              label="Continente" 
              value={country.region} 
            />
            <InfoBlock 
              label="Sub-região" 
              value={country.subregion || 'N/A'} 
            />
            <InfoBlock 
              label="População" 
              value={country.population.toLocaleString('pt-BR')} 
            />
            <InfoBlock 
              label="Área" 
              value={`${country.area.toLocaleString('pt-BR')} km²`} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};