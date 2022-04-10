import { Formik } from 'formik'
import React from 'react'

import { LeadForm } from './LeadForm'
import { initialFormValues, ClubFormSchema } from './schema'

export const ContactForm = () => {
  const [hasSubmitted, setHasSubmitted] = React.useState(false)

  if (hasSubmitted) return null

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={ClubFormSchema}
      onSubmit={async (values, actions) => {
        try {
          const params = new URLSearchParams(window.location.search)
          actions.setSubmitting(true)
          console.log({
            ...values,
            utm_source: params.get('utm_source') || '',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
            utm_content: params.get('utm_content') || '',
          })
          actions.resetForm()

          // hide the H1 "Lets Talk" component
          const h1Elem = document?.getElementById('contact-form-h1')
          if (h1Elem) h1Elem.style.opacity = '0'

          // Show Thank You component
          setHasSubmitted(true)
        } catch (error) {
          console.log(error)
        } finally {
          actions.setSubmitting(true)
        }
      }}
    >
      {(props) => <LeadForm {...props} />}
    </Formik>
  )
}
