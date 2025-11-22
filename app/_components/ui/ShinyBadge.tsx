"use client";
import { cn } from "@/app/_libs/utils";
import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  textClassName?: string;
}

type TBadgeProps = { text: string } & ShinyTextProps & React.HTMLAttributes<HTMLDivElement>;

export const ShinyBadge = ({
  text,
  className,
  disabled,
  speed,
  textClassName,
  ...props
}: TBadgeProps) => {
  return (
    <div
      className={cn(
        "h-fit w-fit rounded-full bg-white border border-dark-medium-dark px-[16px] py-[8px] font-semibold text-dark-medium-dark",
        className
      )}
      {...props}
    >
      <ShinyText text={text} disabled={disabled} speed={speed} textClassName={textClassName} />
    </div>
  );
};

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  textClassName = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={cn(
        "inline-block bg-clip-text text-transparent",
        disabled ? "" : "animate-shine-badge",
        textClassName
      )}
      style={{
  backgroundImage:
      "linear-gradient(120deg, #646464 25%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.85) 55%, #646464 75%)",

        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};