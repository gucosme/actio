"use client";

import * as React from "react";

export const Button = () => {
  return (
    <button
      className="border bg-slate-500 p-2 rounded"
      onClick={() => alert("boop")}
    >
      Boop
    </button>
  );
};
