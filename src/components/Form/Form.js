import {Formik, Form} from 'formik'

const Form = ({children, ...props}) => <Formik {...props}><Form>{children}</Form></Formik>

export default Form