interface FormGroupsContainerProps {
  children: React.ReactNode
  name: string
}
/**
 * Renders a container for form groups.
 *
 * @component
 * @param {Readonly<FormGroupsContainerProps>} props - The component props.
 * @param {string} props.name - The name of the form group container.
 * @param {ReactNode} props.children - The child components to render inside the container.
 * @returns {JSX.Element} The rendered form groups container.
 */
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
        <div className="flex flex-col gap-4">{children}</div>
      </fieldset>
    </div>
  )
}
