import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "./utils"; // your className helper

export function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-1";

  const variants = {
    default: "bg-gray-50 text-gray-900 hover:bg-gray-100 shadow-sm",
    destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    ghost: "bg-transparent hover:bg-gray-100",
    link: "text-blue-500 underline hover:text-blue-600"
  };

  const sizes = {
    default: "h-9 px-4",
    sm: "h-8 px-3",
    lg: "h-10 px-6",
    icon: "h-9 w-9 p-2"
  };

  return <Comp className={cn(baseClasses, variants[variant], sizes[size], className)} {...props} />;
}
