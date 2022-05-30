import { FormikProps } from 'formik'
import * as Yup from 'yup'

import {
  isValidEmail,
  isValidMobileNumber,
  isFullName,
  ExtractStringPropertyNames,
} from 'helpers'

const errorMessages = {
  name: `Enter your full name. Eg. Aindrilla Das`,
  number: 'Enter a valid phone number. Eg. 7003355200',
  email: 'Enter a valid email. Eg. contact@montro.life',
  message: `Enter your message`,
}

export const ContactFromSchema = Yup.object({
  name: Yup.string()
    .test('fullNameValidation', errorMessages.name, (val) =>
      isFullName(val || '')
    )
    .required(errorMessages.name),
  phone_number: Yup.string()
    .test('isValidMobileNumber', errorMessages.number, (val) =>
      isValidMobileNumber(val || '', 'en-IN')
    )
    .required(errorMessages.number),
  email: Yup.string()
    .test('isValidEmail', errorMessages.email, (val) => isValidEmail(val || ''))
    .required(errorMessages.email),
  message: Yup.string().required(errorMessages.message),
  receive_wa_updates: Yup.boolean(),
})

export type IForm = Yup.Asserts<typeof ContactFromSchema>

export type FormKeys = ExtractStringPropertyNames<IForm>

export type FormProps = FormikProps<IForm>

export const initialFormValues: IForm = {
  name: '',
  email: '',
  phone_number: '',
  message: '',
  receive_wa_updates: true,
}
