"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/_libs/utils";

/* Root */
function Tabs(props: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root {...props} />;
}

/* Typed Tab Children */
type TabChild = React.ReactElement<{ value: string }>;

function hasValueProp(props: unknown): props is { value: string } {
  return (
    !!props &&
    typeof props === "object" &&
    "value" in props &&
    typeof (props as { value: unknown }).value === "string"
  );
}

function isTabChild(child: React.ReactNode): child is TabChild {
  return React.isValidElement(child) && hasValueProp(child.props);
}

/* TabsList with two pills (active + hover) */
type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List> & {
  value: string;
};

function TabsList({ className, children, value, ...props }: TabsListProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const items = React.Children.toArray(children).filter(isTabChild);

  const activeIndex = items.findIndex((c) => c.props.value === value);

  return (
    <div
      className={cn(
        "border-soft-mint relative flex h-[72px] w-full items-center justify-center rounded-full border bg-white px-1",
        className,
      )}
    >
      <TabsPrimitive.List className="relative flex h-full w-full" {...props}>
        {/* ✅ Active pill */}
        {activeIndex !== -1 && (
          <motion.div
            key="active-pill"
            layoutId="activePill"
            className="absolute inset-1 z-[2] rounded-full"
            style={{
              left: `${(activeIndex * 100) / items.length}%`,
              width: `${100 / items.length}%`,
            }}
            animate={{ backgroundColor: "#0BB586" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        )}

        {/* ✅ Hover pill */}
        <AnimatePresence>
          {hoveredIndex !== null && hoveredIndex !== activeIndex && (
            <motion.div
              key="hover-pill"
              layoutId="hoverPill"
              className="absolute inset-1 z-[1] rounded-full"
              style={{
                left: `${(hoveredIndex * 100) / items.length}%`,
                width: `${100 / items.length}%`,
              }}
              initial={false} // 👈 prevents flashing
              animate={{ backgroundColor: "#B2F2E8" }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
            />
          )}
        </AnimatePresence>

        {items.map((child, index) => (
          <div
            key={child.props.value}
            className="relative z-10 flex h-full flex-1 cursor-pointer items-center justify-center px-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {child}
          </div>
        ))}
      </TabsPrimitive.List>
    </div>
  );
}

/* Trigger — text only */
function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        `font-body text-teal-deep hover:text-emerald-health flex h-full w-full items-center justify-center px-4 text-base font-semibold transition-all duration-300 data-[state=active]:text-white`,
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn("flex-1 overflow-x-visible overflow-y-visible outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
