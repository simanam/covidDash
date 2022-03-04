import React, { useState, useEffect } from "react";

import { Row, Col, Typography } from "antd";

import { StatsCardCompo, CovidMap, ChartLine } from "../components";
import { sortData } from "../components/utils";
import Countrystats from "../pages/Countrystats";
import { useGetCovidDataQuery } from "../services/covidApi";
import { useGetCaronaDataQuery } from "../services/caronaApi";
import { useGetCaronaHistoryQuery } from "../services/caronaApi";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [casesType, setCasesType] = useState("cases");
  const { data, isFetching } = useGetCovidDataQuery();
  const {
    data: mapCountries,
    isError,
    isLoading,
    isSuccess,
  } = useGetCaronaDataQuery();
  const count = 120;
  const { data: charHistory } = useGetCaronaHistoryQuery({ count });

  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  // const [mapCountries, setMapCountries] = useState([]);

  const [mapZoom, setMapZoom] = useState(1);

  // useEffect(() => {
  //   const getCountriesData = async () => {
  //     fetch("https://disease.sh/v3/covid-19/countries")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const countries = data.map((country) => ({
  //           name: country.country,
  //           value: country.countryInfo.iso2,
  //         }));
  //         let sortedData = sortData(data);
  //         // setCountries(countries);
  //         setMapCountries(data);
  //         // setTableData(sortedData);
  //       });
  //   };

  //   getCountriesData();
  // }, []);

  if (isFetching) return "Loading...";
  const globalStats = data[0];

  return (
    <>
      <Row className="homeopage-Container" gutter={[16, 16]}>
        <Col md={12} sm={24}>
          <CovidMap
            center={mapCenter}
            zoom={mapZoom}
            countries={mapCountries}
          />
        </Col>
        <Col md={12} sm={24}>
          <StatsCardCompo globalStats={globalStats} />
        </Col>
        <Col md={12} sm={24} className="country-stats-container">
          <div className="affected-Country-header">
            <Typography.Title
              level={3}
              className="affected-Country-title"
              style={{ margin: 0 }}
            >
              Affected Countries
            </Typography.Title>
            <Typography.Title level={4}>
              <Link to="/countries">Read More</Link>
            </Typography.Title>
          </div>
          <Countrystats simplified={true} />
        </Col>
        <Col md={12} sm={24} className="chart-contianer">
          <ChartLine historyData={charHistory} casesType={casesType} />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
