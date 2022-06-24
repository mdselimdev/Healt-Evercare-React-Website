import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((val) => setServices(val))
      .catch((error) => {
        console.log(error.messege);
      });
  }, [serviceId]);

  const singleService = [];

  for (const service of services) {
    console.log(service.id);
    if (service.id === serviceId) {
      singleService.push(service);
    }
  }

  return (
    <Container>
      <div className="mx-auto py-5 px-3 service-details">
        <img src={singleService[0]?.img} className="w-100 rounded-2" alt="" />
        <h1 className="fs-1 fw-bold text-success my-3">
          {singleService[0]?.title}
        </h1>
        <p className="fs-4 fw-bold text-primary">{singleService[0]?.data}</p>
      </div>
    </Container>
  );
};

export default ServiceDetails;
