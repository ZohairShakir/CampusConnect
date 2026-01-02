import React from "react";
import { cn } from "./utils";

export function Badge({ className, ...props }) {
  return <span className={cn("inline-block px-3 py-1 rounded-full text-sm font-bold", className)} {...props} />;
}
