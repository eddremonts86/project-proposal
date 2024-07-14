import { IData, IOptions } from "@/pages/documentation/forms/types";


export const inputsExample: IData[] = [
  {
    name: "username",
    label: "Username",
    value: "John Doe",
    type: "text",
    description: "This is your public display name.",
  },
  {
    name: "Password",
    label: "Password",
    value: "password",
    type: "text",
    description: "This is your password",
  },
  {
    name: "Email",
    label: "Email",
    value: "example@test.com",
    type: "text",
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

export const selectOptions: IOptions[] = [
  { value: "1", label: "32" },
  { value: "2", label: "36" },
  { value: "3", label: "40" },
  { value: "4", label: "42" },
  { value: "5", label: "44" },
];
