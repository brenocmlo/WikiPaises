
import { useParams, Link } from 'react-router-dom';

export const Detail = () => {
  
  const { code } = useParams();

  return (
    <div>
      <Link to="/">← Voltar para a lista</Link>
      <h1>Detalhes do País: {code}</h1>
      <p>Aqui vamos mostrar as informações completas do país.</p>
    </div>
  );
};