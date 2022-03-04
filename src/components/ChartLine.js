import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.css";
import numeral from "numeral";
import Chart from "chart.js/auto";
import { Typography } from "antd";
const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    x: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    y: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

const ChartLine = ({ historyData, casesType }) => {
  const [historicData, setHistoricData] = useState({});
  const caseType = casesType;

  //   let chartData = buildChartData(historyData, casesType);
  //   console.log(chartData);

  useEffect(() => {
    let chartData = buildChartData(historyData, casesType);

    setHistoricData(chartData);
  }, [casesType]);

  return (
    <div className="line-chart-cont">
      <div className="stat-heading">
        <Typography.Title
          className="stat-heading-main"
          level={3}
          style={{
            marginBottom: "0px",
          }}
        >
          Six Month History
        </Typography.Title>
      </div>
      {historicData?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                label: "Cases",
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: historicData,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
};

export default ChartLine;
