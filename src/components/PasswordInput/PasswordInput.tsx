import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface PasswordInputProps {
  value: string;
  onChange: (newValue: string) => void;
  label?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, label = 'Password' }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(prev => !prev);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth sx={{ marginTop: 1 }} variant="outlined">
      <InputLabel htmlFor="outlined-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        endAdornment={
          <InputAdornment position="start" sx={{marginRight:2}}>
            <IconButton
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

export default PasswordInput;