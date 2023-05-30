import React, { useState } from 'react';
import {
  OutlinedInput,
  Button,
  FormHelperText,
  InputAdornment,
  Typography,
  FormGroup,
  Box,
} from '@mui/material';

export default function DecimalToBinary() {
  const [decimal, setDecimal] = useState('');
  const [initialized, setInitialized] = useState(false);

  function calculateBinary() {
    //TODO:
    return;
  }

  return (
    <>
      <Typography variant="h4" component="h2">
        Decimal To Binary
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <FormGroup>
          <OutlinedInput
            id="outlined-adornment-decimal"
            endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            aria-describedby="outlined-decimal-helper-text"
            value={decimal}
            onChange={(e) => setDecimal(e.target.value)}
            // https://stackoverflow.com/questions/43687964/only-numbers-input-number-in-react
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'decimal',
            }}
          />
          <FormHelperText id="outlined-decimal-helper-text">
            Decimal
          </FormHelperText>
        </FormGroup>
        <Button variant="contained">Submit</Button>
        <Button onClick={() => {setDecimal('')}} variant="contained" sx={{ml: 2, bgcolor: 'text.secondary'}}>Reset</Button>
      </Box>
      <Typography variant="p" component="p">
        {decimal != '' && `Binary:  ${calculateBinary()}`}
      </Typography>
    </>
  );
}
