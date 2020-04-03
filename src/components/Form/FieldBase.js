import React from "react";
import {View} from "react-native"
import { Field } from 'formik';
import { useTheme } from '../../lib/theme'
import Label from "../Label";
import Spacer from "../Spacer";
import Footnote from "../Footnote";

const FieldBase = ({
  field = {},
  placeholder,
  form = {},
  label,
  input,
  ...props
}) => {
  const { colors } = useTheme();
  const { name, value } = field;
  const { errors, touched, handleChange, handleBlur } = form;
  const error = errors && errors[name]
  const hasTouched = touched && touched[name]
  const Input = input;
  const baseErrorStyle = {
    color: colors.negative
  };
  console.log(touched)
  return (
    <View>
      <Label>{label || name}</Label>
      <Spacer size="xs" />
      <Input
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        error={hasTouched && error}
        {...props}
      />
      <Footnote style={baseErrorStyle}>{hasTouched && error}</Footnote>
      <Spacer size="s" />
    </View>
  );
};

export default props => <Field component={FieldBase} {...props} />