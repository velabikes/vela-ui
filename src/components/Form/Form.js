import {Formik} from 'formik'

const Form = ({children, ...props}) => <Formik {...props}><>{children}</></Formik>

export default Form