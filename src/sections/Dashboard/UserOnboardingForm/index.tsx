import { Formik } from 'formik'
import { setCookie } from 'nookies'
import React, { useEffect, useState, useRef } from 'react'

import { updateUser } from 'api/axios'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Modal } from 'components/Modal'
import { H3 } from 'components/Typography'
import { useAppContext } from 'context'
import { toast } from 'helpers/toast' //
import { defaultCookieOptions } from 'helpers/user'

import { FormKeys, initialFormValues, UserInfoFormSchema } from './schema'
import { Form, modalCss } from './styles'

export const UserOnboardingForm = () => {
  const { user, setUser } = useAppContext()
  const [open, setOpen] = useState(false)
  const mountRef = useRef(false)

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true
      setOpen(!user?.name || !user?.phone)
    }
  }, [user])

  return (
    <Modal isOpen={open} css={modalCss} showCloseBtn={false}>
      <Formik
        initialValues={{
          ...initialFormValues,
          name: user?.name,
          phone: user?.phone,
        }}
        validationSchema={UserInfoFormSchema}
        onSubmit={async (values, actions) => {
          try {
            actions.setSubmitting(true)

            const payload = {
              name: values.name,
              phone: values.phone,
            }

            console.log(payload)

            const { data } = await updateUser(
              `${user?.id}`,
              {
                populate: ['role'],
              },
              payload
            )

            toast?.success('Thank you!')

            setCookie(
              null,
              'user',
              JSON.stringify(data),
              defaultCookieOptions()
            )

            setUser(data)
            setOpen(false)
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
            value: props.values[inputName],
            onBlur: props.handleBlur(inputName),
            onChange: props.handleChange(inputName),
            error: !!(props.touched[inputName] && props.errors[inputName]),
            errorMessage: props.errors[inputName],
          })
          return (
            <Form>
              <H3>Hi, we would like some info</H3>
              <Input
                placeholder="Enter full name..."
                {...getInputProps('name')}
              />
              <Input
                type="tel"
                placeholder="Enter phone number..."
                maxLength={10}
                {...getInputProps('phone')}
              />
              <Button
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
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}
