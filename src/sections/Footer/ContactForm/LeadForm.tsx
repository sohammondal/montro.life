import React from 'react'

import { Button, Checkbox, Input } from 'components'

import { FormKeys, FormProps } from './schema'
import { FormContainer, btnStyles } from './styles'

export const LeadForm: React.FC<FormProps> = (props) => {
  const getInputProps = (inputName: FormKeys) => ({
    value: props.values[inputName],
    onBlur: props.handleBlur(inputName),
    onChange: props.handleChange(inputName),
    error: !!(props.touched[inputName] && props.errors[inputName]),
    errorMessage: props.errors[inputName],
  })

  return (
    <FormContainer>
      <Input placeholder="Name" {...getInputProps('name')} />
      <Input
        placeholder="Phone Number"
        maxLength={15}
        {...getInputProps('phone_number')}
      />
      <Input placeholder="Email" {...getInputProps('email')} />
      <Input placeholder="Your Message" {...getInputProps('message')} />
      <Checkbox
        selected={props.values.receive_wa_updates || false}
        label="I want to receive messages on whatsapp"
        onClick={() => {
          props.setFieldValue(
            'receive_wa_updates',
            !props.values.receive_wa_updates
          )
        }}
      />
      <Button
        css={btnStyles}
        onClick={props.submitForm}
        isLoading={props.isSubmitting}
        disabled={props.isSubmitting}
      >
        Submit
      </Button>
    </FormContainer>
  )
}
