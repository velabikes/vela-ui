import React from "react"
import { Field } from 'formik'
import { useTheme } from '../../lib/theme'
import Label from "../Label"
import Spacer from "../Gap"
import Footnote from "../Typography/Footnote"
import Box from "../Box"
import Text from "../Text"

const FieldBase = ({
  field = {},
  form = {},
  label,
  input,
  ...props
}) => {
  const { colors } = useTheme()
  const { name, value } = field
  const { errors, touched, handleChange, handleBlur } = form
  const error = errors && errors[name]
  const hasTouched = touched && touched[name]
  const Input = input;
  const baseErrorStyle = {
    color: colors.negative
  }
  return (
    <Box>
      <Label>{label || name}</Label>
      <Spacer size="small" />
      <Input
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        error={hasTouched && error}
        {...props}
      />
      <Footnote style={baseErrorStyle}>{hasTouched && error}</Footnote>
    </Box>
  );
};

export default props => <Field component={FieldBase} {...props} />