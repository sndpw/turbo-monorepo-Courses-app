'use client';

import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { FormEvent, useState } from 'react';

interface Props {
  session: Session | null;
}

export default function AuthForm({ session }: Props) {
  const [email, setEmail] = useState('');

  const handleEmailSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent form submission from refreshing the page
    await signIn('nodemailer', { email, callbackUrl: '/protected' });
  };

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/protected' });
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <div>
      {!session && (
        <>
          <form onSubmit={handleEmailSignIn}>
            <input
              required
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Continue</button>
          </form>
          <button onClick={handleGoogleSignIn}>Continue with Google</button>
        </>
      )}

      {session && <button onClick={handleSignOut}>Sign out</button>}
    </div>
  );
}
