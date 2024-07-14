import {
  Form,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { IData } from "../types";
import TextInput from "./base/TextInput";

interface FormProps {
  onSubmit: (data: unknown) => void;
  inputs: IData[];
}
const FormContent = ({ onSubmit, inputs }: FormProps) => {
  const form = useForm();

  const formInputs = inputs?.length ? inputs.map((item: IData) => {
    if (item.type === "file" || item.type === "text") {
      return (<TextInput
        key={item.id}
        name={item.name}
        label={item.label}
        value={item.value}
        description={item.description}
        control={form.control}
        type={item.type}
      />)
    }
  }
) : null;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-8">
        <div>{formInputs}</div>
      </form>
    </Form>
  );
};

export default FormContent;
