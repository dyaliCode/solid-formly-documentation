import { NavLink } from "solid-app-router";
import { Component } from "solid-js";

const Aside: Component = () => {
  return (
    <aside>
      <nav class="closed-on-mobile">
        <a href="#secondary" id="toggle-docs-navigation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="expand"
            fill="currentColor"
            viewBox="0 0 16 16"
            height="16px"
          >
            <title>Expand</title>
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="collapse"
            fill="currentColor"
            viewBox="0 0 16 16"
            height="16px"
          >
            <title>Collapse</title>
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"
            ></path>
          </svg>
          Table of content
        </a>

        <details open={true}>
          <summary>Guide</summary>
          <ul>
            <li>
              <NavLink href="/" class="secondary">
                Getting started
              </NavLink>
            </li>
            <li>
              <NavLink href="/validation" class="secondary">
                Validation
              </NavLink>
            </li>
            <li>
              <NavLink href="/style" class="secondary">
                Style
              </NavLink>
            </li>
          </ul>
        </details>

        <details open={true}>
          <summary>Advanced</summary>
          <ul>
            <li>
              <NavLink href="/advanced/alter" class="secondary">
                Alter
              </NavLink>
            </li>
            <li>
              <NavLink href="/advanced/multiple-forms" class="secondary">
                Multiple Forms
              </NavLink>
            </li>
            <li>
              <NavLink href="/advanced/custom-validation" class="secondary">
                Custom Validation
              </NavLink>
            </li>
            <li>
              <NavLink href="/advanced/preprocess" class="secondary">
                Preprocess
              </NavLink>
            </li>
          </ul>
        </details>

        <details open={true}>
          <summary>Components</summary>
          <ul>
            <li>
              <NavLink href="/components/text" class="secondary">
                Text
              </NavLink>
            </li>
            <li>
              <NavLink href="/components/password" class="secondary">
                Password
              </NavLink>
            </li>
            <li>
              <NavLink href="/components/email" class="secondary">
                Email
              </NavLink>
            </li>
            <li>
              <NavLink href="/components/number" class="secondary">
                Number
              </NavLink>
            </li>
            <li>
              <NavLink href="/components/telephone" class="secondary">
                Telephone
              </NavLink>
            </li>
            <li>
              <NavLink href="/components/textarea" class="secondary">
                Textarea
              </NavLink>
            </li>
            <li>
              <NavLink href="/components/select" class="secondary">
                Select
              </NavLink>
            </li>
            <li>
              <NavLink href="/components/checkbox" class="secondary">
                Checkbox
              </NavLink>
            </li>
            <li>
              <NavLink href="/components/radio" class="secondary">
                Radio
              </NavLink>
            </li>
            <li>
              <NavLink href="/components/file" class="secondary">
                File
              </NavLink>
            </li>
            <li>
              <NavLink href="/components/Range" class="secondary">
                Range
              </NavLink>
            </li>
          </ul>
        </details>
      </nav>
    </aside>
  );
};

export default Aside;
