import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_COUNTRIES = gql`
  query {
    countries {
      name
      capital
      currency
      languages {
        name
      }
    }
  }
`;

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>List of Countries</h2>
      {data.countries.map((country) => (
        <div key={country.name}>
          <h3>{country.name}</h3>
          <p>Capital: {country.capital}</p>
          <p>Currency: {country.currency}</p>
          <p>
            Languages: {country.languages.map((lang) => lang.name).join(", ")}
          </p>
          <button>Details</button>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
