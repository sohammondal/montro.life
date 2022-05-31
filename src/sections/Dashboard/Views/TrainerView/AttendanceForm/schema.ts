import { FormikProps } from 'formik'
import * as Yup from 'yup'

export const UserInfoFormSchema = Yup.object({
  username: Yup.string(),
  name: Yup.string(),
  phone: Yup.string(),
  email: Yup.string(),
  timestamp: Yup.string().required('Select attendance date & time'),
  type: Yup.string().required('Select attendance type. Eg. Offline'),
  comments: Yup.string(),
})

export type IForm = Yup.Asserts<typeof UserInfoFormSchema>

export type FormKeys = keyof IForm

export type FormProps = FormikProps<IForm>

export const initialFormValues: IForm = {
  username: '',
  name: '',
  phone: '',
  email: '',
  timestamp: '',
  type: '',
  comments: '',
}
