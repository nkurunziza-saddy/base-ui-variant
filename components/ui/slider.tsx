"use client";

import * as React from "react";
import { Slider as SliderPrimitive } from "@base-ui-components/react/slider";

import { cn } from "@/lib/utils";

function Slider({
  className,
  children,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props) {
  const _values = React.useMemo(() => {
    if (value !== undefined) {
      return Array.isArray(value) ? value : [value];
    }
    if (defaultValue !== undefined) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [min];
  }, [value, defaultValue, min]);

  return (
    <SliderPrimitive.Root
      thumbAlignment="edge"
      className="data-[orientation=horizontal]:w-full"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      {...props}
    >
      {children}
      <SliderPrimitive.Control
        data-slot="slider-control"
        className={cn(
          "flex touch-none select-none data-disabled:opacity-64 data-[disabled]:pointer-events-none data-[orientation=horizontal]:w-full data-[orientation=horizontal]:min-w-44 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:flex-col",
          className
        )}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow select-none bg-input data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-indicator"
            className="rounded-full bg-primary select-none data-[orientation=horizontal]:ms-0.5 data-[orientation=vertical]:mb-0.5"
          />
          {Array.from({ length: _values.length }, (_, index) => (
            <SliderPrimitive.Thumb
              data-slot="slider-thumb"
              key={index}
              className="block size-4 shrink-0 rounded-full border border-input bg-white outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 data-dragging:ring-2 data-dragging:ring-ring/50"
            />
          ))}
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

function SliderValue({ className, ...props }: SliderPrimitive.Value.Props) {
  return (
    <SliderPrimitive.Value
      data-slot="slider-value"
      className={cn("flex justify-end text-sm", className)}
      {...props}
    />
  );
}

export { Slider, SliderValue };
