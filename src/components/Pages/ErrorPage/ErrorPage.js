import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <header className="error" />
      <div className="error-box">
        <h2 className="error-box__title">Natours</h2>
        <h1 className="error-box__message">Sorry that page doesnt exist</h1>
        <br />
        <Link className="error-box__link" to="/">
          <p>Go back to the home page.</p>
        </Link>
      </div>
    </div>
  );
}
