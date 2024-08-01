import { FieldValues } from 'react-hook-form'

import FlexContainer from '@/components/containers/FlexContainer'
import GridContainer from '@/components/containers/GridContainer'
import { FormContainer } from '@/components/globals/form'
import { CommonBtn } from '@/components/globals/form/components/base'
import useForms from '@/components/globals/form/hooks/useForms'

import { advanced, basic } from './const/apiFormconfig'

export default function FormsPage() {
  const { onSubmit, formValues } = useForms()
  return (
    <FlexContainer className="gap-3">
      <GridContainer className="p-2">
        <FormContainer
          onChange={(values: FieldValues) => {
            onSubmit(values)
          }}
          onSubmit={(values: FieldValues) => {
            onSubmit(values)
          }}
          inputs={basic}
        />
        <div className="mt-6 flex items-center justify-center gap-2">
          <CommonBtn type="button" text="loading..." loading={true} />
          <CommonBtn type="submit" text="Submit" icon="mdi-send-variant" />
          <CommonBtn type="button" text="Cancel" icon="mdi-close-thick" />
        </div>
      </GridContainer>
      <GridContainer className="border-0 p-0">
        <FormContainer
          onChange={(values: FieldValues) => {
            onSubmit(values)
          }}
          onSubmit={(values: FieldValues) => {
            onSubmit(values)
          }}
          inputs={advanced}
        />
      </GridContainer>

      <FlexContainer className="flex justify-start p-6">
        {formValues && (
          <div className="flex flex-col space-y-2">
            {Object.keys(formValues).map((key) => {
              return (
                <>
                  <p key={`${key}_id`} className="capitalize">
                    {key}:{' '}
                  </p>
                  <code className="m-21 rounded-md bg-slate-800 p-3 text-white">
                    {JSON.stringify(formValues[key])}
                  </code>
                </>
              )
            })}
          </div>
        )}
      </FlexContainer>
    </FlexContainer>
  )
}
