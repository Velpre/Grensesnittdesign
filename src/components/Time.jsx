import React from "react";
/* Hooks */
import { useState } from "react";
/* MUI */
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

export default function Time(props) {
  const [value, setValue] = useState(null);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="Velg tidspunkt"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            props.pickTime(value);
          }}
          renderInput={(params) => (
            <TextField required fullWidth margin="dense" {...params} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}
