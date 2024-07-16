import { FieldValues, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CommonBtn } from './base'

export function TestForm() {
  const form = useForm()

  const va = form.getValues('username')

  const onSubmit = (values: FieldValues) => {
    console.log('submit btn Clicked getFunction', va)
    console.log('submit btn Clicked', values)
  }

  return (
    <Form {...form}>
      {/* <form onSubmit={form.handleSubmit(() => onSubmit)} className="space-y-8"> */}
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={(
            { field }: { field: unknown } // Specify the type of the 'field' object as 'any'
          ) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  {...(field as object)} // Spread the field properties onto Input
                  placeholder="shadcn"
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          onClick={form.handleSubmit((data: FieldValues) => onSubmit(data))}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}
