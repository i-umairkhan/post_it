"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  const signInHandler = () => {
    signIn();
  };
  return (
    <li className="list-none">
      <button
        className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25"
        onClick={signInHandler}
      >
        Sign In
      </button>
    </li>
  );
}
