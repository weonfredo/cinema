import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function Username() {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="username"
        type="email"
        className="bg-purple-50"
      />
    </Box>
  );
}

export function Password() {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="password"
        type="password"
        className="bg-purple-50"
      />
    </Box>
  );
}

{
  /* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="password" variant="standard" /> */
}
