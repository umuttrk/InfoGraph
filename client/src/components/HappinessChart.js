import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Chart from "react-apexcharts";
// import { resdata } from "../resData/resdataHappiness";

//resdata yı alıcan unutma
function HappinessChart({ resdata }) {
  console.log("buradayım", resdata);
  const groupedData = {};

  resdata.forEach((item) => {
    const year = item.happinessData.year;

    // Eğer obje içinde bu yıl yoksa, bir dizi oluştur
    if (!groupedData[year]) {
      groupedData[year] = [];
    }

    // Veriyi ilgili yılın dizisine ekle
    groupedData[year].push(item);
  });

  Object.keys(groupedData).forEach((year) => {
    groupedData[year].data = {
      options: {
        chart: {
          id: `basic-bar-${year}`,
        },
        xaxis: {
          categories: groupedData[year].map(
            (item) => item["ratesData"]["ageInterval"]
          ),
        },
      },
      series: [
        {
          name: "happyRate",
          data: groupedData[year].map((item) => item["ratesData"]["happyRate"]),
        },
        {
          name: "mediumRate",
          data: groupedData[year].map(
            (item) => item["ratesData"]["mediumRate"]
          ),
        },
        {
          name: "upsetRate",
          data: groupedData[year].map((item) => item["ratesData"]["upsetRate"]),
        },
      ],
    };
  });

  console.log(groupedData);

  return (
    <Container>
      <Row>
        <Col>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            {Object.keys(groupedData).map((year, index) => (
              <Accordion.Item key={year} eventKey={index}>
                <Accordion.Header>
                  <strong className="ps-3">{year} yılı</strong>
                </Accordion.Header>
                <Accordion.Body className="d-flex align-items-center justify-content-center">
                  <Chart
                    options={groupedData[year].data.options}
                    series={groupedData[year].data.series}
                    type="bar"
                    width="500"
                  />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default HappinessChart;
