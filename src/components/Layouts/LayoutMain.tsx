import { ParentComponent } from "solid-js";
import Header from "../Partials/Header";
import Aside from "../Partials/Aside";

const LayoutMain: ParentComponent<{}> = (props) => {
  return (
    <>
      <Header />
      <main class="container" id="docs">
        <Aside />
        <div role="document">{props.children}</div>
      </main>
    </>
  );
};

export default LayoutMain;
