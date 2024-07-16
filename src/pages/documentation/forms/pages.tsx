import { inputsExample, selectOptions } from './const/input'
import {
  SelectBtn,
  DateInput,
  CommonBtn,
} from '../../../components/globals/form/components/base'
import FlexContainer from '../../../components/containers/FlexContainer'
import ExampleFormContainer from '../features/ExampleFormContainer'
import { RadioInput } from '../../../components/globals/form/components/base/RadioInput'
import { CheckBoxInput } from '../../../components/globals/form/components/base/CheckBoxInput'
import { FieldValues } from 'react-hook-form'
import Contents from '../../../components/globals/form/components/Contents'
import useEventListner from '../../../components/globals/form/hooks/useEventListner'
import { useState } from 'react'

export default function FormsPage() {
  const [showValues, setShowValues] = useState(false)

  const { onSubmit, formValues } = useEventListner()

  const sendFieldValues = () => {
    console.log('submit btn Clicked', formValues)
    setShowValues(true)
  }

  return (
    <FlexContainer>
      <div className="flex flex-col flex-wrap justify-around gap-2 border p-6">
        <h2 className="text-xl">Inputs list </h2>
        <RadioInput />
        <CheckBoxInput />
        <SelectBtn
          selectOptions={selectOptions}
          selectLabel="Select your size"
          contentLabel="Man Jeans"
        />
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
      <ExampleFormContainer>
        <Contents
          onSubmit={(values: FieldValues) => onSubmit(values)}
          inputs={inputsExample}
        />
        <div className="flex justify-around p-6">
          <CommonBtn
            type="submit"
            loading={false}
            text="Submit"
            onSubmit={sendFieldValues}
          />
          <CommonBtn
            onSubmit={sendFieldValues}
            loading={false}
            type="button"
            text="Cancel"
          />
        </div>
      </ExampleFormContainer>
      <div className="flex justify-around p-6">
        {/* {formValues && <div>{JSON.stringify(formValues)}</div>} */}
        {showValues && formValues && (
          <div className="flex flex-col space-y-2">
            {Object.keys(formValues).map((key, index) => {
              return (
                <p key={index}>
                  {key}: {formValues[key]}
                </p>
              )
            })}
          </div>
        )}
      </div>
       <p>Inputs desc</p>
       <p>Text</p> 
 



    </FlexContainer>
  )
}
