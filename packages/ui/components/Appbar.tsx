'use client'

import { Typography, Button } from "@mui/material";

function Appbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
        zIndex: 1,
      }}
    >
      <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {}}>
        <Typography variant={"h6"}>CourseBite</Typography>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <Button variant={"contained"} onClick={() => {}}>
            Signup
          </Button>
        </div>
        <div>
          <Button variant={"contained"} onClick={() => {}}>
            Signin
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
