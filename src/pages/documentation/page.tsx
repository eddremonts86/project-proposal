import { Link } from '@tanstack/react-router'

const features = [
  {
    name: 'Tables',
    to: '/documentation/tables',
  },
]

const documentationLinks = (features || []).map((feature) => (
  <li className="text-xl font-bold" key={feature.name}>
    <Link
      to={feature.to}
      className="cursor-pointer text-blue-500 hover:underline"
    >
      {feature.name}
    </Link>
  </li>
))

export default function IndexHome() {
  return (
    <div className="flex h-dvh w-full flex-col p-12">
      <h1 className="text-3xl font-bold">Documentation</h1>
      <h2 className="text-3xl font-bold">
        You can see here all the custom components and how it works.{' '}
      </h2>
      <div className="mt-8">
        <ul>
          <p className="text-2xl font-bold">Features: </p>
          {documentationLinks}
        </ul>
      </div>
    </div>
  )
}
