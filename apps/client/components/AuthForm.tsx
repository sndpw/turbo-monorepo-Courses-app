"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { FormEvent, useState } from "react";
import { Button, Card, Typography, TextField, Divider} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
// import IconButton from "@mui/material/IconButton";
// import Fingerprint from "@mui/icons-material/Fingerprint";

interface Props {
  session: Session | null;
}

export default function AuthForm({ session }: Props) {
  const [email, setEmail] = useState("");

  const handleEmailSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent form submission from refreshing the page
    await signIn("nodemailer", { email, callbackUrl: "/protected" });
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/protected" });
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div>
      {!session && (
        <div style={{ display: "flex", justifyContent: "center", paddingTop:30 }}>
          <Card variant={"outlined"} style={{ width: 400, height:300, padding: 20}}>
            <form onSubmit={handleEmailSignIn}>
              <TextField style={{marginTop:35}}
                required
                fullWidth={true}
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "25px",
                }}
              >
                <Button fullWidth={true} variant="contained">
                  Continue
                </Button>
              </div>
            </form>
         <div style={{ paddingTop:25, paddingBottom:25 }}>
            <Divider sx={{ borderBottomWidth: 5 }}>OR</Divider>
         
            </div>
             
            <div style={{ display: "flex", justifyContent: "center"}}>
                
              <Button onClick={handleGoogleSignIn} variant="contained"  fullWidth={true}>
                <GoogleIcon style={{marginRight:5}}></GoogleIcon> Continue with Google
             
              </Button>
            </div>
          </Card>
        </div>
      )}

      {session && (
        <Button onClick={handleSignOut} variant="contained">
          Sign out
        </Button>
      )}
    </div>
  );
}
