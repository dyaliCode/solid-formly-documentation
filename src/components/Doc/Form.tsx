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
    />
  );
};

export default Form;
