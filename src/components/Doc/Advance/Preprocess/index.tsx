import { Component } from "solid-js";
import Calculator from "./Calculator";
import Fetch from "./Fetch";

const Example: Component = () => {
  return (
    <section>
      <h3>Preprocess</h3>
      <Calculator />
      <Fetch />
    </section>
  );
};

export default Example;
