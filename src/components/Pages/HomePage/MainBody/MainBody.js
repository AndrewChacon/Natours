import React from "react";

import Form from "./Form/Form";
import Stories from "./Stories/Stories";
import Tours from "./Tours/Tours";
import Features from "./Features/Features";
import About from "./About/About";

export default function MainBody() {
  return (
    <main>
      <About />
      <Features />
      <Tours />
      <Stories />
      <Form />
    </main>
  );
}
