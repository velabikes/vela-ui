import {Formik, Form as FormikForm} from 'formik'

const Form = ({children, ...props}) => <Formik {...props}><FormikForm>{children}</FormikForm></Formik>

export default Form