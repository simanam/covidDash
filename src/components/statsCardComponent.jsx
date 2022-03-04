import React from "react";
import millify from "millify";
import { Col, Row, Card, Typography } from "antd";

const statsCardComponent = ({ globalStats }) => {
  return (
    <>
      <div className="stat-heading">
        <Typography.Title
          className="stat-heading-main"
          level={3}
          style={{
            marginBottom: "0px",
          }}
        >
          Current Status
        </Typography.Title>
        <Typography.Text className="stat-heading-sub" style={{ color: "gray" }}>
          World Update
        </Typography.Text>
      </div>
      <Row className="card-compo" gutter={[10, 10]}>
        <Col md={12} sm={24}>
          <Card className="card" style={{ textAlign: "start" }}>
            <Typography.Text level={3} className="card-num-Text">
              {millify(globalStats.TotalCases)}
            </Typography.Text>
            <Typography.Text>Total Cases</Typography.Text>
            <Typography.Text> &uarr;</Typography.Text>
          </Card>
        </Col>
        <Col md={12} sm={24}>
          <Card className="card">
            <Typography.Text
              level={3}
              className="card-num-Text"
              style={{ color: "#F97109" }}
            >
              {millify(globalStats.ActiveCases)}
            </Typography.Text>
            <Typography.Text>Active Cases</Typography.Text>
            <Typography.Text> &darr;</Typography.Text>
          </Card>
        </Col>
        <Col md={12} sm={24}>
          <Card className="card">
            <Typography.Text
              level={3}
              className="card-num-Text"
              style={{ color: "#46B555" }}
            >
              {millify(globalStats.TotalRecovered)}
            </Typography.Text>
            <Typography.Text>Recovered</Typography.Text>
            <Typography.Text> &darr;</Typography.Text>
          </Card>
        </Col>
        <Col md={12} sm={24}>
          <Card className="card">
            <Typography.Text
              level={3}
              className="card-num-Text"
              style={{ color: "#E40906" }}
            >
              {millify(globalStats.TotalDeaths)}
            </Typography.Text>
            <Typography.Text>Death</Typography.Text>
            <Typography.Text> &darr;</Typography.Text>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default statsCardComponent;
