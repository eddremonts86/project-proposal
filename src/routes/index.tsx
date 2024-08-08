import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="flex max-h-full max-w-full items-center justify-start">
      <div>
        <h1 className="text-5xl">Schilling Proposal</h1>
        <h2>Home page!</h2>
      </div>
    </div>
  ),
})
