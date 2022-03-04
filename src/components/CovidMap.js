import React, { useState } from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import { Typography } from "antd";
import "./Map.css";
import { showDataOnMap } from "./utils";

const CovidMap = ({ center, zoom, countries }) => {
  return (
    <div className="covid-map">
      {/* <div className="stat-heading">
        <Typography.Title
          className="stat-heading-main"
          level={3}
          style={{
            marginBottom: "0px",
          }}
        >
          World Update
        </Typography.Title>
      </div> */}
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries)}
      </LeafletMap>
    </div>
  );
};

export default CovidMap;
