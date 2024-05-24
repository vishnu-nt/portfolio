"use client";

import useMousePosition from "@/utils/useMousePosition";

const GradientContainer = () => {
  const { x, y } = useMousePosition();
  return (
    <div
      className="fixed w-full h-full left-0 top-0"
      style={{
        background: `radial-gradient(300px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default GradientContainer;

