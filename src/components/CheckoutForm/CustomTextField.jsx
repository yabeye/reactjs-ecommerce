import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { register } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      {/* <Controller
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
      /> */}
      <Controller
        name={name}
        error={isError}
        render={({ field }) => (
          <TextField
            {...register(name)}
            label={label}
            required={required}
            fullWidth
          />
        )}
      />
    </Grid>
  );
}

export default FormInput;
