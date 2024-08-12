"use client"; // Error boundaries must be Client Components

import { getHTTPStatusCodeFromError } from "@trpc/server/http";
import Link from "next/link";
import React from "react";
import { TRPCError } from "@trpc/server";

interface Props {
  error: TRPCError;
  reset: () => void;
}

const error = ({ error, reset }: Props) => {
  const httpCode = getHTTPStatusCodeFromError(error);
  console.log(error, httpCode);
  return (
    <div className="bg-background flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="text-primary mx-auto h-12 w-12" />
        <h1 className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Sorry, something&apos;s gone wrong! 😢
        </h1>
        <p className="text-muted-foreground mt-4">{error.message}</p>
      </div>
    </div>
  );
};

export default error;
