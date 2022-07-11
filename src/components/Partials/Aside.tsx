import { Component } from "solid-js";

const Aside: Component = () => {
  return (
    <aside>
      <nav class="closed-on-mobile">
        <a href="./" class="secondary" id="toggle-docs-navigation">
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
          <summary>Getting started</summary>
          <ul>
            <li>
              <a
                href="./"
                id="start-link"
                class="secondary"
                aria-current="page"
              >
                Introduction
              </a>
            </li>
            <li>
              <a href="./" id="start-link" class="secondary">
                Usage
              </a>
            </li>
            <li>
              <a href="./themes.html" id="themes-link" class="secondary">
                Themes
              </a>
            </li>
            <li>
              <a
                href="./customization.html"
                id="customization-link"
                class="secondary"
              >
                Customization
              </a>
            </li>
            <li>
              <a href="./classless.html" id="classless-link" class="secondary">
                Class-less version
              </a>
            </li>
            <li>
              <a href="./rtl.html" id="rtl-link" class="secondary">
                RTL
              </a>
            </li>
          </ul>
        </details>
        <details>
          <summary>Layout</summary>
          <ul>
            <li>
              <a
                href="./containers.html"
                id="containers-link"
                class="secondary"
              >
                Containers
              </a>
            </li>
            <li>
              <a href="./grid.html" id="grid-link" class="secondary">
                Grid
              </a>
            </li>
            <li>
              <a href="./scroller.html" id="scroller-link" class="secondary">
                Horizontal scroller
              </a>
            </li>
          </ul>
        </details>
        <details>
          <summary>Elements</summary>
          <ul>
            <li>
              <a
                href="./typography.html"
                id="typography-link"
                class="secondary"
              >
                Typography
              </a>
            </li>
            <li>
              <a href="./buttons.html" id="buttons-link" class="secondary">
                Buttons
              </a>
            </li>
            <li>
              <a href="./forms.html" id="forms-link" class="secondary">
                Forms
              </a>
            </li>
            <li>
              <a href="./tables.html" id="tables-link" class="secondary">
                Tables
              </a>
            </li>
          </ul>
        </details>
        <details>
          <summary>Components</summary>
          <ul>
            <li>
              <a
                href="./accordions.html"
                id="accordions-link"
                class="secondary"
              >
                Accordions
              </a>
            </li>
            <li>
              <a href="./cards.html" id="cards-link" class="secondary">
                Cards
              </a>
            </li>
            <li>
              <a href="./dropdowns.html" id="dropdowns-link" class="secondary">
                Dropdowns
              </a>
            </li>
            <li>
              <a href="./modal.html" id="modal-link" class="secondary">
                Modal
              </a>
            </li>
            <li>
              <a href="./navs.html" id="navs-link" class="secondary">
                Navs
              </a>
            </li>
            <li>
              <a href="./progress.html" id="progress-link" class="secondary">
                Progress
              </a>
            </li>
          </ul>
        </details>
        <details>
          <summary>Utilities</summary>
          <ul>
            <li>
              <a href="./loading.html" id="loading-link" class="secondary">
                Loading
              </a>
            </li>
            <li>
              <a href="./tooltips.html" id="tooltips-link" class="secondary">
                Tooltips
              </a>
            </li>
          </ul>
        </details>
        <details>
          <summary>Extend</summary>
          <ul>
            <li>
              <a
                href="./we-love-classes.html"
                id="we-love-classes-link"
                class="secondary"
              >
                We love .classes
              </a>
            </li>
          </ul>
        </details>
      </nav>
    </aside>
  );
};

export default Aside;
