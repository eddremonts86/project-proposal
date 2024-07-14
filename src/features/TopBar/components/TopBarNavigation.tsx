import { Link } from '@tanstack/react-router'

const topBarLinks = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Documentation',
    to: '/documentation',
  },
]

const navigation = (topBarLinks || []).map((feature) => (
  <Link
    to={feature.to}
    key={feature.name}
    className="text-md hover:bg-grey-400 cursor-pointer space-x-1 rounded-xl bg-gray-50 px-6 py-3"
  >
    {feature.name}
  </Link>
))

export default function TopBarNavigation() {
  return (
    <nav className="flex items-center gap-6 text-sm lg:gap-3">{navigation}</nav>
  )
}
