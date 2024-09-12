import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-front">
        <ReactCountryFlag
          countryCode={country.code}
          svg
          style={{
            width: '6em',  // Increased width
            height: '6em', // Increased height
            marginBottom: '10px'
          }}
          title={country.name}
        />
        <h2>{country.name}</h2>
      </div>
      <div className="card-back">
        <div className="info">
          <h3>Academic Reputation</h3>
          <p>QS World Ranking: {country.academic_reputation.university_rankings.QS_World_Ranking}</p>
          <p>Times Higher Education: {country.academic_reputation.university_rankings.Times_Higher_Education}</p>
          <p>Accreditation: {country.academic_reputation.accreditation}</p>
        </div>
        <div className="info">
          <h3>Cost of Education</h3>
          <p>Tuition Fees: {country.cost_of_education.tuition_fees}</p>
        </div>
        <div className="info">
          <h3>Living Expenses</h3>
          <p>Cost of Living: {country.living_expenses.cost_of_living}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
