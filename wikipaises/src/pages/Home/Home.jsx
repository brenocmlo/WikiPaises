import { useState, useEffect } from 'react';
import { CountriesService } from '../../service/restcountries/countries.service';
import { Card } from '../../components/Card/Card';
import './Home.css'; 

export const Home = () => {
  const [countries, setCountries] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [selectedRegion, setSelectedRegion] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

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

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRegion]);

  const filteredCountries = countries.filter((country) => {
    const matchesName = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());  
    const matchesRegion = selectedRegion === '' || country.region === selectedRegion;
    return matchesName && matchesRegion;
  });

  // 3. Lógica matemática da Paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  const goToNextPage = () => setCurrentPage((prev) => prev + 1);
  const goToPreviousPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1.5rem', color: 'var(--title-color)' }}>Explorar Países</h1>
      
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '2rem',
        flexWrap: 'wrap' 
      }}>
        <input 
          type="text" 
          placeholder="Pesquisar por país..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.8rem 1rem',
            borderRadius: '6px',
            border: '1px solid var(--border-color)', 
            backgroundColor: 'var(--input-bg)',      
            color: 'var(--text-color)',              
            flex: '1', 
            minWidth: '200px',
            fontSize: '1rem'
          }}
        />

        <select 
          value={selectedRegion} 
          onChange={(e) => setSelectedRegion(e.target.value)}
          style={{
            padding: '0.8rem 1rem',
            borderRadius: '6px',
            border: '1px solid var(--border-color)', 
            backgroundColor: 'var(--input-bg)',      
            color: 'var(--text-color)',              
            fontSize: '1rem',
            minWidth: '150px'
          }}
        >
          <option value="">Todos os Continentes</option>
          <option value="Americas">Américas</option>
          <option value="Europe">Europa</option>
          <option value="Asia">Ásia</option>
          <option value="Africa">África</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {filteredCountries.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-color)', marginTop: '3rem' }}>
          Nenhum país encontrado para essa busca. 
        </p>
      ) : (
        <>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '2rem',
            justifyContent: 'center'
          }}>
            {currentCountries.map((country) => (
              <div style={{ width: '250px' }} key={country.cca3}>
                <Card country={country} />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination-container">
              <button 
                className="pagination-button"
                onClick={goToPreviousPage} 
                disabled={currentPage === 1}
              >
                ← Anterior
              </button>
              
              <span className="pagination-info" style={{ color: 'var(--text-color)' }}>
                Página {currentPage} de {totalPages}
              </span>

              <button 
                className="pagination-button"
                onClick={goToNextPage} 
                disabled={currentPage === totalPages}
              >
                Próxima →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};