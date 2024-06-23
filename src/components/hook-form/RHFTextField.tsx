import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';
import React from 'react';

// ----------------------------------------------------------------------

type RHFTextFieldProps = {
  name: string,
  helperText: React.ReactNode,
  Error: boolean,
};

export default function RHFTextField({ name, helperText, Error, ...other }: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error || !!Error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
}
