import React from 'react';
import CountryCard from './CountryCard';
import './App.css';

const data = [
  {
    name: "Australia",
    code: "AU",
    academic_reputation: {
      university_rankings: {
        QS_World_Ranking: "7 universities in the top 100",
        Times_Higher_Education: "6 universities in the top 100"
      },
      accreditation: "Globally recognized"
    },
    cost_of_education: {
      tuition_fees: "A$20,000 - A$45,000 per year"
    },
    living_expenses: {
      cost_of_living: "A$18,000 - A$30,000 per year"
    }
  },
  {
    name: "USA",
    code: "US",
    academic_reputation: {
      university_rankings: {
        QS_World_Ranking: "10 of the top 20",
        Times_Higher_Education: "8 of the top 20"
      },
      accreditation: "World-renowned"
    },
    cost_of_education: {
      tuition_fees: "$20,000 - $50,000 per year"
    },
    living_expenses: {
      cost_of_living: "$15,000 - $25,000 per year"
    }
  },
  {
    name: "UK",
    code: "GB",
    academic_reputation: {
      university_rankings: {
        QS_World_Ranking: "4 of the top 10",
        Times_Higher_Education: "3 of the top 10"
      },
      accreditation: "Global recognition and high standards"
    },
    cost_of_education: {
      tuition_fees: "£10,000 - £30,000 per year"
    },
    living_expenses: {
      cost_of_living: "£9,000 - £12,000 per year"
    }
  },
  {
    name: "India",
    code: "IN",
    academic_reputation: {
      university_rankings: {
        QS_World_Ranking: "3 universities in the top 200",
        Times_Higher_Education: "2 universities in the top 300"
      },
      accreditation: "Nationally and internationally recognized"
    },
    cost_of_education: {
      tuition_fees: "₹100,000 - ₹500,000 per year"
    },
    living_expenses: {
      cost_of_living: "₹200,000 - ₹400,000 per year"
    }
  },
  {
    name: "Ireland",
    code: "IE",
    academic_reputation: {
      university_rankings: {
        QS_World_Ranking: "2 universities in the top 200",
        Times_Higher_Education: "3 universities in the top 300"
      },
      accreditation: "Internationally recognized qualifications"
    },
    cost_of_education: {
      tuition_fees: "€10,000 - €25,000 per year"
    },
    living_expenses: {
      cost_of_living: "€9,000 - €12,000 per year"
    }
  },
  {
    name: "Russia",
    code: "RU",
    academic_reputation: {
      university_rankings: {
        QS_World_Ranking: "2 universities in the top 300",
        Times_Higher_Education: "3 universities in the top 400"
      },
      accreditation: "Internationally recognized"
    },
    cost_of_education: {
      tuition_fees: "₽200,000 - ₽500,000 per year"
    },
    living_expenses: {
      cost_of_living: "₽300,000 - ₽600,000 per year"
    }
  },
  {
    name: "Japan",
    code: "JP",
    academic_reputation: {
      university_rankings: {
        QS_World_Ranking: "5 universities in the top 100",
        Times_Higher_Education: "3 universities in the top 200"
      },
      accreditation: "Highly respected globally"
    },
    cost_of_education: {
      tuition_fees: "¥500,000 - ¥1,000,000 per year"
    },
    living_expenses: {
      cost_of_living: "¥1,000,000 - ¥1,500,000 per year"
    }
  },
  {
    name: "Switzerland",
    code: "CH",
    academic_reputation: {
      university_rankings: {
        QS_World_Ranking: "2 universities in the top 100",
        Times_Higher_Education: "3 universities in the top 200"
      },
      accreditation: "Highly respected globally"
    },
    cost_of_education: {
      tuition_fees: "CHF 15,000 - CHF 40,000 per year"
    },
    living_expenses: {
      cost_of_living: "CHF 20,000 - CHF 30,000 per year"
    }
  },
  {
    name: "China",
    code: "CN",
    academic_reputation: {
      university_rankings: {
        QS_World_Ranking: "5 universities in the top 100",
        Times_Higher_Education: "4 universities in the top 200"
      },
      accreditation: "Globally recognized"
    },
    cost_of_education: {
      tuition_fees: "¥20,000 - ¥50,000 per year"
    },
    living_expenses: {
      cost_of_living: "¥30,000 - ¥60,000 per year"
    }
  }
];

const App = () => {
  return (
    <div className="App">
      <h1 style={{ fontFamily: "'Playfair Display', serif",color:"white" }}>Countries Information</h1>
      <div className="card-container">
        {data.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default App;