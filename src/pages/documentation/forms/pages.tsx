import { FieldValues } from 'react-hook-form'

import FlexContainer from '@/components/containers/FlexContainer'
import { FormContent } from '@/components/globals/form'
import { CommonBtn } from '@/components/globals/form/components/base'
import useForms from '@/components/globals/form/hooks/useForms'

import { inputsExample } from './const/input'

export default function FormsPage() {
  const { onSubmit, formValues } = useForms()
  return (
    <FlexContainer className="gap-3">
      <FlexContainer className="sm:flex-col">
        <FormContent
          onChange={(values: FieldValues) => {
            onSubmit(values)
          }}
          onSubmit={(values: FieldValues) => {
            onSubmit(values)
          }}
          inputs={inputsExample}
        />
        <div className="mt-6 flex items-center justify-end gap-2">
          <CommonBtn type="button" text="loading..." loading={true} />
          <CommonBtn type="submit" text="Submit" icon="mdi-send-variant" />
          <CommonBtn type="button" text="Cancel" icon="mdi-close-thick" />
        </div>
      </FlexContainer>
      <FlexContainer className="flex justify-start p-6">
        {formValues && (
          <div className="flex flex-col space-y-2">
            {Object.keys(formValues).map((key) => {
              return (
                <p key={`${key}_id`}>
                  {key}:{' '}
                  <small className="mx-1 text-blue-500">
                    {JSON.stringify(formValues[key])}
                  </small>
                </p>
              )
            })}
          </div>
        )}
      </FlexContainer>
    </FlexContainer>
  )
}
