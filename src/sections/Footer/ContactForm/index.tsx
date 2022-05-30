import { Formik } from 'formik'
import { Notyf } from 'notyf' //
import React from 'react'

import { LeadForm } from './LeadForm'
import { initialFormValues, ContactFromSchema } from './schema'

export const ContactForm = () => {
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={ContactFromSchema}
      onSubmit={async (values, actions) => {
        const toast = new Notyf()
        try {
          const params = new URLSearchParams(window.location.search)
          actions.setSubmitting(true)

          const payload = {
            sheetId: '1ZneiREfbdm2X95Xbf1_ywnQcDpGMtqYtIElAgm_niN0',
            sheetTitle: 'Leads',
            data: {
              'Created At': new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
              }),
              Name: values.name,
              Phone: values.phone_number,
              Email: values.email,
              Message: values.message,
              'WA Consent': values.receive_wa_updates,
              Source: params.get('utm_source') || '',
              Medium: params.get('utm_medium') || '',
              Campaign: params.get('utm_campaign') || '',
            },
          }

          const response = await fetch(process.env.API_BASE_I + '/lead', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          }).then((resp) => resp.json())

          if (!response.success) throw new Error(response.message)

          actions.resetForm()

          toast.success('Thank you! We will get in touch with you shortly')
        } catch (error) {
          console.log(error)

          toast.error('Oops! Something Went Wrong')
        } finally {
          actions.setSubmitting(false)
        }
      }}
    >
      {(props) => <LeadForm {...props} />}
    </Formik>
  )
}
