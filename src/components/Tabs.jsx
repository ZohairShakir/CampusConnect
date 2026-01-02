import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "./utils";

export function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

export function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      className={cn(
        "inline-flex h-10 bg-white-100 rounded-xl p-[4px] gap-1",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium text-gray-900 hover:bg-gray-200 transition-colors data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-gray-900",
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      className={cn(
        "mt-2 bg-white rounded-xl p-4 shadow-sm",
        className
      )}
      {...props}
    />
  );
}
