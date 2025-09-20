import React from "react";

interface ConcentricLoaderProps {
  children: React.ReactNode;
}

export default function ConcentricLoader({ children }: ConcentricLoaderProps) {
  return (
    <>
      <div className="flex w-full mt-4 flex-col items-center justify-center gap-4">
        <div className="flex h-64 w-64 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-blue-500 text-blue-300 dark:border-t-sky-400 text-4xl dark:text-sky-400">
          <div className="flex h-58 w-58 animate-spin items-center justify-center rounded-full border-4 border-transparent dark:border-t-sky-200 border-t-blue-200 text-2xl dark:text-sky-100 text-blue-100"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          {children}
        </div>
      </div>
    </>
  );
}
