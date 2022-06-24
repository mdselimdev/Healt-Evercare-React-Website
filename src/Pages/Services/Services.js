import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((val) => setServices(val))
      .catch((error) => {
        console.log(error.messege);
      });
  }, []);

  return (
    <div className="my-5">
      <Container>
        <h1 className="text-center py-4 fw-bolder fs-2">Our Services</h1>
        <div className="doctor-container">
          {services.map((short) => (
            <Service key={short.key} short={short}></Service>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
