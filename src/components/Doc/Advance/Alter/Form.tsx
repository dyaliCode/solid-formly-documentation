import { Formly, IValue, IField } from "solid-formly";

declare type IProps = {
  form_name: string;
  fields: IField[];
};

const Form = (props: IProps) => {
  const onSubmit = (data: IValue) => {
    console.log(data);
  };

  return (
    <Formly
      form_name={props.form_name}
      fields={props.fields}
      onSubmit={onSubmit}
      btnSubmit={{
        text: "Send Text",
      }}
      btnReset={{
        text: "Reset Text",
        classes: ["outline", "btn-primary"],
      }}
      real={true}
    />
  );
};

export default Form;
