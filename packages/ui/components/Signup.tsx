"use client";

import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function Signup(props: {
  onClick: (username: string, password: string) => void
}) {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h6"}>
          Welcome to Coursera. Sign up below
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth={true}
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <br />

          <Button
            size={"large"}
            variant="contained"
            onClick={async () => {
              props.onClick(username, password);
            }}
          >
            Signin
          </Button>
        </Card>
      </div>
    </div>
  );
};
