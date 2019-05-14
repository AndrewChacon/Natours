import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error">
      <h2 className="error__title">Natours</h2>
      <h1 className="error__message">Sorry that page doesnt exist</h1>
      <br />
      <Link className="error__link" to="/">
        <p>Go back to the home page.</p>
      </Link>
    </div>
  );
}
