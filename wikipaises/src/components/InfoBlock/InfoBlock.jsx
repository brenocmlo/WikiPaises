
import './InfoBlock.css';

export const InfoBlock = ({ label, value }) => {
  return (
    <div className="info-block-container">
      <span className="info-block-label">{label}</span>
      <span className="info-block-value">{value}</span>
    </div>
  );
};