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
              <NavLink href="/advance" class="secondary">
                Advance
              </NavLink>
            </li>
            <li>
              <NavLink href="/style" class="secondary">
                Style
              </NavLink>
            </li>
          </ul>
        </details>

        <details open={false}>
          <summary>Components</summary>
          <ul>
            <li>
              <a href="#" class="secondary">
                Text
              </a>
            </li>
            <li>
              <a href="#" class="secondary">
                Password
              </a>
            </li>
            <li>
              <a href="#" class="secondary">
                Email
              </a>
            </li>
            <li>
              <a href="#" class="secondary">
                Number
              </a>
            </li>
            <li>
              <a href="#" class="secondary">
                Telephone
              </a>
            </li>
            <li>
              <a href="#" class="secondary">
                Textarea
              </a>
            </li>
            <li>
              <a href="#" class="secondary">
                Select
              </a>
            </li>
            <li>
              <a href="#" class="secondary">
                Checkbox
              </a>
            </li>
            <li>
              <a href="#" class="secondary">
                Radio
              </a>
            </li>
            <li>
              <a href="#" class="secondary">
                Autocomplete
              </a>
            </li>
            <li>
              <a href="#" class="secondary">
                File
              </a>
            </li>
            <li>
              <a href="#" class="secondary">
                Range
              </a>
            </li>
          </ul>
        </details>
      </nav>
    </aside>
  );
};

export default Aside;
