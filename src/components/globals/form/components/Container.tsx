// import { z } from "zod"
import FormContent from "./Content";
import CommonBtn from "./CommonBtn";

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })

export default function Container() {
  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="w-[300px] border-red-600">
      <FormContent onSubmit={onSubmit} />

      <div className="flex justify-around p-6">
        <CommonBtn onSubmit={onSubmit} type="submit" text="Submit" />
        <CommonBtn onSubmit={onSubmit} type="button" text="Cancel" />
      </div>
    </div>
  );
}
