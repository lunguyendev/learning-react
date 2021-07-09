import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  // const { errors, formState } = form;
  // const hasError = formState.touched[name] && errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange } }) => (
        <TextField
          onChange={onChange}
          fullWidth
          label={label}
          disabled={disabled}
          error
          helperText="Dm looxir or"
        />
      )}
    />
  );
}

export default InputField;