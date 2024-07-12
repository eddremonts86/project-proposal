import { Link } from "@tanstack/react-router";

const features = [
  {
    name: "Tables",
    to: "/documentation/tables",
  },
  {
    name: "Forms",
    to: "/documentation/forms",
  },
];

const documentationLinks = (features || []).map((feature) => (
  <li
    className="text-xl font-bold"
    key={feature.name}
  >
    <Link
      to={feature.to}
      className="text-blue-500 cursor-pointer hover:underline"
    >
      {feature.name}
    </Link>
  </li>
));

export default function IndexHome() {
  return (
    <div className="flex flex-col w-full p-12 h-dvh">
      <h1 className="text-3xl font-bold ">Documentation</h1>
      <h2 className="text-3xl font-bold">
        You can see here all the custom components and how it works.{" "}
      </h2>
      <div className="mt-8">
        <ul>
          <p className="text-2xl font-bold">Features: </p>
          {documentationLinks}
        </ul>
      </div>
    </div>
  );
}
