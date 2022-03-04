import React, { useState } from "react";
import Link from "react-router-dom";
import millify from "millify";
import { Card, Row, Col, Input, Typography } from "antd";
import { useGetCountriesDataQuery } from "../services/covidApi";

const Countrystats = ({ simplified }) => {
  const { data: countriesList, isFetching } = useGetCountriesDataQuery();

  const [countries, setCountries] = useState(countriesList);
  const count = simplified ? 10 : countries.length;

  if (isFetching) return "Loading...";

  return (
    <>
      <div className="countries-List-container">
        <div className="listCountryHeader">
          <Typography.Title className="activeCaseHeader" level={4}>
            Active Cases
          </Typography.Title>
          <Typography.Title className="countaryHeader" level={4}>
            Country
          </Typography.Title>
        </div>

        {countries?.slice(0, count).map((country) => (
          <div className="listCountries" key={country.TwoLetterSymbol}>
            <div className="flag-emoji">
              {/* {getFlagEmoji(country.TwoLetterSymbol)} */}
              <img
                src={`https://countryflagsapi.com/svg/${country.TwoLetterSymbol}`}
                alt={`flag-${country.Country}`}
                className="flag-svg"
              />
            </div>
            <Typography.Title className="activeCase" level={4}>
              {country.ActiveCases}
            </Typography.Title>
            <p className="country-name">{country.Country}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countrystats;
