import React, {useState} from 'react'
import {
    Screen,
    Box,
    TextField,
    PhoneField,
    EmailField
  } from '@vela/ui'
  import { Formik } from 'formik'

const initialValues = {TextField: '', PhoneField: '', EmailField: ''}

  export default FormsScreen = () => {
      const [v, sv] = useState('')
      return (
          <Screen>
              <Box>
                <Formik initialValues={initialValues}>
                  <>
                    <TextField name='TextField' />
                    <PhoneField name='PhoneField' />
                    <EmailField name='EmailField' />
                  </>
                </Formik>
              </Box>
          </Screen>
      )
  }