import React, { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const getCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const count = await res.json();
      setCountries(count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const cardStyle = {
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "170px",
    textAlign: "center",
    
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div key={country.cca3} style={cardStyle}>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={imageStyle}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
