import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      {/* <Link to="/">Home</Link> */}
      Details - ID: {id}
    </div>
  );
};

export default Details;
