import React from "react";
import { Link } from "react-router-dom";
import { Form } from "../components/Form/Form";
import Nav from "../components/Nav/Nav";

export default function Create() {
  return (
    <>
      <div>
        <Nav />
        <Form />
      </div>
      <div>
        <Link to="/home">
          <button className="buttonBack">Back</button>
        </Link>
      </div>
    </>
  );
}
