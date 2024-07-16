import FlexContainer from '@/components/containers/FlexContainer'
import { FormContent } from '@/components/globals/form'
import {
  CheckBoxInput,
  CommonBtn,
  DateInput,
  RadioInput,
  SelectBtn,
} from '@/components/globals/form/components/base'
import useForms from '@/components/globals/form/hooks/useForms'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { inputsExample } from './const/input'

export default function FormsPage() {
  const [showValues, setShowValues] = useState(false)
  const { onSubmit, formValues } = useForms()
  const selectItem = inputsExample.filter((item) => item.type === 'select')[0]
  const { control } = useForm<FieldValues>()

  return (
    <FlexContainer className="gap-3">
      <div className="flex flex-col flex-wrap justify-around gap-2 border p-6">
        <h2 className="text-xl">Inputs list </h2>
        <RadioInput />
        <CheckBoxInput />
        <SelectBtn item={selectItem} control={control} />
        <DateInput placeholder="Date" />
        <div className="flex justify-between gap-2">
          <CommonBtn
            type="submit"
            text="Submit"
            className="w-full max-w-52"
            loading={true}
            icon="mdi-account-heart text-red-400 text-2xl"
            onSubmit={onSubmit}
          />
          <CommonBtn
            type="submit"
            text="Sending..."
            className="w-full max-w-52"
            loading={true}
            icon="mdi-loading infinite"
            onSubmit={onSubmit}
          />
        </div>
      </div>
      <FlexContainer className="sm:flex-col">
        <FormContent
          onSubmit={(values: FieldValues) => onSubmit(values)}
          inputs={inputsExample}
        />
        <div className="flex justify-around p-6">
          <CommonBtn
            type="submit"
            loading={false}
            text="Submit"
            onSubmit={() => setShowValues(true)}
          />
          <CommonBtn
            onSubmit={() => setShowValues(false)}
            loading={false}
            type="button"
            text="Cancel"
          />
        </div>
      </FlexContainer>
      <div className="flex justify-around p-6">
        {showValues && formValues && (
          <div className="flex flex-col space-y-2">
            {Object.keys(formValues).map((key) => {
              return (
                <p key={`${key}_id`}>
                  {key}: {formValues[key]}
                </p>
              )
            })}
          </div>
        )}
      </div>
    </FlexContainer>
  )
}
