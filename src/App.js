import "./App.css";
import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "./apollo";
import CountryList from "./CountryList";
import CountryDetails from "./CountryDetails";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (countryName) => {
    setSelectedCountry(countryName);
  };
  return (
    <ApolloProvider client={ApolloClient}>
      <div className="App">
        <CountryList handleCountryClick={handleCountryClick} />
        {selectedCountry && <CountryDetails countryName={selectedCountry} />}
      </div>
    </ApolloProvider>
  );
}

export default App;
