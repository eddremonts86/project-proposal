import { useForm } from "react-hook-form";
import {
  Form,
} from "../../../ui/form";
import TextInput from "./base/TextInput";
// import { z } from "zod";

export interface IData {
  name: string;
  label: string;
  value: string;
  type?: string;
  description: string;
}

const data: IData[] = [
  {
    name: "username",
    label: "Username",
    value: "John Doe",
    description: "This is your public display name.",
  },
  {
    name: "Password",
    label: "Password",
    value: "password",
    description: "This is your password",
  },
  {
    name: "Email",
    label: "Email",
    value: "example@test.com",
    description: "This is your email address",
  },
  {
    name: "uploadFile",
    label: "Upload File",
    value: "",
    type: "file",
    description: "Upload a file here",
  },
];

interface FormProps {
  onSubmit: (data: unknown) => void;
}

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

const Content = ({ onSubmit }: FormProps) => {
  const form = useForm();

  const imputs = data.map((item: IData, index) => (
    <TextInput
      key={index}
      name={item.name}
      label={item.label}
      value={item.value}
      description={item.description}
      control={form.control}
      type={item.type}
    />
  ));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6">
        <div>{imputs}</div>
      </form>
    </Form>
  );
};

export default Content;
