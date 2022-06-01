import { Formik } from 'formik'
import React from 'react'

import { markAttendance } from 'api/axios'
import { Button, H3, Input, Select } from 'components'
import { Modal, ModalProps } from 'components/Modal'
import { useAppContext } from 'context'
import { toast } from 'helpers/toast'
import { UserInfo } from 'types'

import { FormKeys, initialFormValues, UserInfoFormSchema } from './schema'
import { From, modalCss } from './styles'

interface Props extends ModalProps {
  client: UserInfo | null
  closeModal: () => void
}

export const AttendanceForm: React.FC<Props> = ({
  client,
  closeModal,
  ...props
}) => {
  const { user: trainer } = useAppContext()
  return (
    <Modal {...props} css={modalCss}>
      <Formik
        initialValues={{
          ...initialFormValues,
          ...client,
        }}
        validationSchema={UserInfoFormSchema}
        onSubmit={async (values, actions) => {
          try {
            actions.setSubmitting(true)
            console.log(values)
            if (values.type === 'cancelled' && !values.comments) {
              actions.setFieldError('comments', 'Pl share cancellation reason')
              return
            }
            await markAttendance({
              client_id: values.id,
              trainer_id: trainer?.id,
              type: values.type,
              timestamp: values.timestamp,
              comments: values.comments,
            })
            toast?.success('Attendance Saved')
            actions.resetForm()
            closeModal()
          } catch (error: any) {
            console.log(error)
            const axiosError = error?.response?.data?.error
            const message = axiosError?.message
              ? `${axiosError?.message} (${axiosError?.name}) - ${axiosError?.message}`
              : 'Oops! Something Went Wrong'
            toast?.error(message)
          } finally {
            actions.setSubmitting(false)
          }
        }}
      >
        {(props) => {
          const getInputProps = (inputName: FormKeys) => ({
            title: props.values[inputName],
            value: props.values[inputName],
            onBlur: props.handleBlur(inputName),
            onChange: props.handleChange(inputName),
            error: !!(props.touched[inputName] && props.errors[inputName]),
            errorMessage: props.errors[inputName],
          })
          return (
            <>
              <H3>Enter attendance details</H3>
              <From>
                <Input
                  disabled
                  {...getInputProps('username')}
                  label="Username"
                />
                <Input disabled {...getInputProps('name')} label="Name" />
                <Input
                  type="tel"
                  disabled
                  {...getInputProps('phone')}
                  label="Phone"
                />
                <Input disabled {...getInputProps('email')} label="Email" />
                <Input
                  type="datetime-local"
                  {...getInputProps('timestamp')}
                  label="Date & Time"
                />
                <Select
                  value={props.values.type}
                  placeholder="Select attendance type"
                  options={[
                    {
                      name: 'Offline',
                      value: 'offline',
                    },
                    {
                      name: 'Online',
                      value: 'online',
                    },
                    {
                      name: 'Cancelled',
                      value: 'cancelled',
                    },
                  ]}
                  onChange={(value) => props.setFieldValue('type', value, true)}
                  error={!!(props.touched['type'] && props.errors['type'])}
                  errorMessage={props.errors['type']}
                />
                {props.values.type === 'cancelled' && (
                  <Input
                    type="text"
                    {...getInputProps('comments')}
                    label="Cancellation comments"
                  />
                )}
              </From>
              <Button
                className="submit-button"
                isLoading={props.isSubmitting}
                onClick={(e) => {
                  e.preventDefault()
                  props.submitForm()
                }}
                onKeyPress={(e) => {
                  e.preventDefault()
                  e.key === 'Enter' && props.submitForm()
                }}
              >
                Submit
              </Button>
            </>
          )
        }}
      </Formik>
    </Modal>
  )
}
