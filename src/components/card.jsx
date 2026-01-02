import React from "react";
import { cn } from "./utils";

export function Card({ className, ...props }) {
  return <div className={cn("bg-white text-gray-900 flex flex-col gap-4 rounded-xl border shadow-sm", className)} {...props} />;
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("px-6 pt-4 font-semibold text-lg", className)} {...props} />;
}

export function CardTitle({ className, ...props }) {
  return <h4 className={cn("text-lg font-bold", className)} {...props} />;
}

export function CardDescription({ className, ...props }) {
  return <p className={cn("text-gray-500 text-sm", className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn("px-6 py-4", className)} {...props} />;
}

export function CardFooter({ className, ...props }) {
  return <div className={cn("px-6 py-4 border-t flex justify-end", className)} {...props} />;
}
