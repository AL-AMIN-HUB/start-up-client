import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://lit-woodland-97376.herokuapp.com/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return (
    <div>
      <h2>{service.name}</h2>
    </div>
  );
};

export default SingleService;
