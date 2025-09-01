import { cn } from "@/lib/utils";

export function GridBackground() {
  return (
    <div className="-z-10 absolute dark:bg-background dark:opacity-10 flex h-[50rem] inset-0 items-center justify-center opacity-70 overflow-hidden w-full">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
    </div>
  );
}
