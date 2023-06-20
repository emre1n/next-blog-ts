import React from 'react';

import { signIn, signOut, useSession } from 'next-auth/react';

const SigninButton = () => {
  const { data: session } = useSession();
  console.log(session?.user);
  if (session && session.user) {
    return (
      <div className="flex gap-4">
        <p className="text-accent">{session.user.name}</p>
        <button
          onClick={() => {
            signOut();
          }}
          className="text-error"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        signIn();
      }}
      className="text-success"
    >
      Sign in
    </button>
  );
};

export default SigninButton;
