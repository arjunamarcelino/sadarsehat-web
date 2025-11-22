"use client";
import { cn } from "@/app/_libs/utils";
import { Loader } from "lucide-react";
import React from "react";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
  Danger = "danger",
}

export enum ButtonSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export enum ButtonContent {
  Text = "text",
  LeftIcon = "leftIcon",
  RightIcon = "rightIcon",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  content?: ButtonContent;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Button({
  variant = ButtonVariant.Primary,
  size = ButtonSize.Large,
  content = ButtonContent.Text,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const base =
    "font-body font-semibold cursor-pointer inline-flex items-center justify-center  transition-all duration-350 text-base ";

  const disabledStyle = "disabled:cursor-not-allowed disabled:opacity-50 disabled:text-gray-400";

  const hasLeft = content === ButtonContent.LeftIcon && !!leftIcon;
  const hasRight = content === ButtonContent.RightIcon && !!rightIcon;

  return (
    <button
      disabled={isDisabled}
      className={cn(
        base,
        {
          // Primary
          "bg-emerald-health ring-emerald-health hover:bg-emerald-health/80 text-white ring-4":
            variant === ButtonVariant.Primary,
          // Secondary
          "text-emerald-health ring-emerald-health hover:bg-soft-mint hover:text-emerald-health ring-4":
            variant === ButtonVariant.Secondary,
          // Tertiary
          "text-emerald-health decoration-emerald-health underline underline-offset-2 hover:underline":
            variant === ButtonVariant.Tertiary,

          "text-alert-orange border-alert-orange hover:bg-alert-orange border hover:text-white":
            variant === ButtonVariant.Danger,
        },
        {
          "rounded-lg px-[20px] py-[15.5px] text-base": size === ButtonSize.Large,
          "rounded-lg px-4 py-[11.5px] text-base": size === ButtonSize.Medium,
          "rounded-[6px] px-3 py-[10.5px] text-xs": size === ButtonSize.Small,
        },
        disabledStyle,
        isDisabled && "opacity-70",
        variant === ButtonVariant.Tertiary && "border-none bg-transparent px-0 py-0",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "flex items-center justify-center",
          (hasLeft || hasRight || loading) && "gap-2",
        )}
      >
        {/* Left icon */}
        {hasLeft && (
          <span
            className={cn(
              "flex items-center",
              variant === ButtonVariant.Primary ? "text-white" : "text-emerald-health",
            )}
          >
            {leftIcon}
          </span>
        )}

        {/* Text */}
        <span className="whitespace-nowrap">{children}</span>

        {/* Right icon */}
        {hasRight && (
          <span
            className={cn(
              "flex items-center",
              variant === ButtonVariant.Primary ? "text-white" : "text-emerald-health",
            )}
          >
            {rightIcon}
          </span>
        )}

        {/* Loading */}
        {loading && (
          <Loader
            className={cn(
              "h-4 w-4 animate-spin sm:h-4 sm:w-4 md:h-5 md:w-5",
              variant === ButtonVariant.Primary ? "text-white" : "text-emerald-health",
            )}
          />
        )}
      </span>
    </button>
  );
}
