import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_COUNTRY_DETAILS = gql`
  query Country($name: String!) {
    country(name: $name) {
      name
      capital
      currency
      languages {
        name
      }
      currencies {
        name
        symbol
      }
      flag {
        svgFile
      }
    }
  }
`;

const CountryDetails = ({ countryName }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { name: countryName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data.country;

  return (
    <div>
      <h2>{country.name}</h2>
      <img src={country.flag.svgFile} alt={country.name} />
      <p>Capital: {country.capital}</p>
      <p>Currency: {country.currency}</p>
      <p>Languages: {country.languages.map((lang) => lang.name).join(", ")}</p>
      <p>
        Currencies:{" "}
        {country.currencies
          .map((curr) => `${curr.name} (${curr.symbol})`)
          .join(", ")}
      </p>
    </div>
  );
};

export default CountryDetails;
