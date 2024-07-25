interface FormGroupsContainerProps {
  children: React.ReactNode
  name: string
}
export default function FormGroupsContainer({
  name,
  children,
}: Readonly<FormGroupsContainerProps>) {
  return (
    <div className="relative mb-3 w-full flex-col items-start md:flex">
      <fieldset className="grid min-w-full gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">
          <span className="text-black dark:text-white">{name}</span>
        </legend>
        <div>{children}</div>
      </fieldset>
    </div>
  )
}
