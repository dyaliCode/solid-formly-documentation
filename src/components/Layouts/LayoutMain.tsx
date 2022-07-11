import { Link } from "solid-app-router";
import { ParentComponent } from "solid-js";

const LayoutMain: ParentComponent<{}> = (props) => {
  return (
    <div class="container">
      <nav>
        <ul>
          <li>
            <strong>Brand</strong>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/forms">Text</Link>
          </li>
          <li>
            <Link href="/forms/password">Password</Link>
          </li>
          <li>
            <Link href="/forms/email">Email</Link>
          </li>
          <li>
            <Link href="/forms/number">Number</Link>
          </li>
          <li>
            <Link href="/forms/textarea">Textarea</Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
};

export default LayoutMain;
