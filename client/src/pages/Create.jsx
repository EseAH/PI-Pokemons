import React from "react";
import { Link } from "react-router-dom";
import { Form } from "../components/Form/Form";
import Nav from "../components/Nav/Nav";
import styles from "./Create.module.css"

export default function Create() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className={styles.container}>
        <div>
          <Form />
        </div>
        <Link to="/home">
          <button className="buttonBack">Back</button>
        </Link>
      </div>
    </>
  );
}
