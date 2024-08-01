import React from 'react'
import { FieldError } from 'react-hook-form'

import { cn } from '@/lib/utils'
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import Errormessage from './ErrorMessage'

interface FormItemContainerProps {
  children: React.ReactNode
  error?: FieldError | null
  label?: string
  description?: string
  className?: string
}

export default function FormItemContainer({
  children,
  error,
  description,
  label,
  className,
}: Readonly<FormItemContainerProps>) {
  return (
    <FormItem className={cn('mb-3 flex flex-col', className)}>
      {label && <FormLabel className="capitalize">{label}</FormLabel>}
      {children}
      {description && <FormDescription>{description}</FormDescription>}
      {error && (
        <FormMessage>
          <Errormessage message={error.message} />
        </FormMessage>
      )}
    </FormItem>
  )
}
