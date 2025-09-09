import React from "react";
import { Spinner } from "react-bootstrap";

export default function Exercise6() {
  return (
    <div className="d-flex flex-column align-items-center gap-4">
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
    </div>
  );
}
