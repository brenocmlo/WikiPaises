import { useState, useEffect } from 'react';
import { CountriesService } from '../../service/restcountries/countries.service';
import { Card } from '../../components/Card/Card'; // <-- ADICIONE ESTA IMPORTAÇÃO

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await CountriesService.getAll();
        setCountries(data);
      } catch (error) {
        console.error("Ops, deu erro ao buscar os países:", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lista de Países</h1>
      
      {/* Container em Grid para alinhar os cards lado a lado */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {/* O .map percorre a lista de países e cria um componente Card para cada um */}
        {countries.map((country) => (
          <Card key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};