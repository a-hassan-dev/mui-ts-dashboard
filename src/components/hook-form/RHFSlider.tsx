import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Slider, FormHelperText } from '@mui/material';

// ----------------------------------------------------------------------

type RHFSliderProps = {
  name: string;
  helperText?: React.ReactNode;
}

export default function RHFSlider({ name, helperText, ...other }: RHFSliderProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Slider {...field} valueLabelDisplay="auto" {...other} />
          {(!!error || helperText) && (
            <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
          )}
        </div>
      )}
    />
  );
}
