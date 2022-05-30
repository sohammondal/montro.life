import { FormikProps } from 'formik'
import * as Yup from 'yup'

import {
  isValidMobileNumber,
  isFullName,
  ExtractStringPropertyNames,
} from 'helpers'

const errorMessages = {
  name: `Enter your full name. Eg. Aindrilla Das`,
  phone: 'Enter a valid phone number. Eg. 7003355200',
}

export const UserInfoFormSchema = Yup.object({
  name: Yup.string()
    .test('fullNameValidation', errorMessages.name, (val) =>
      isFullName(val || '')
    )
    .required(errorMessages.name),
  phone: Yup.string()
    .test('isValidMobileNumber', errorMessages.phone, (val) =>
      isValidMobileNumber(val || '', 'en-IN')
    )
    .required(errorMessages.phone),
})

export type IForm = Yup.Asserts<typeof UserInfoFormSchema>

export type FormKeys = ExtractStringPropertyNames<IForm>

export type FormProps = FormikProps<IForm>

export const initialFormValues: IForm = {
  name: '',
  phone: '',
}
