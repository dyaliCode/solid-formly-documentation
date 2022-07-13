import { Component } from "solid-js";
import Alter from "./Calculator";
import Fetch from "./Fetch";

const Example: Component = () => {
  return (
    <section>
      <h3>Preprocess</h3>
      <Alter />
      <Fetch />
    </section>
  );
};

export default Example;
