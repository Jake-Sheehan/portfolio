import React from "react";

interface GlassPaneProps {
  children: React.ReactNode;
  flexDirection: string;
}

export default function GlassPane({ children, flexDirection }: GlassPaneProps) {
  return (
    <div
      className={`glass flex max-w-full ${
        flexDirection === "col" ? "flex-col" : "flex-row"
      } _fade-in flex-wrap items-center justify-center gap-6 rounded-2xl p-4 lg:p-16`}
    >
      {children}
    </div>
  );
}
