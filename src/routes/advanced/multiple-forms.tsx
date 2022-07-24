import MultipleForm from "~/components/Doc/Advance/Multiple";
import LayoutMain from "~/components/Layouts/LayoutMain";

export default function Alter() {
  return (
    <LayoutMain>
      <section>
        <hgroup>
          <h1>Advanced</h1>
          <h2>
            <i>In one component, you can create a multiple forms</i>
          </h2>
        </hgroup>
      </section>

      <MultipleForm />
    </LayoutMain>
  );
}
