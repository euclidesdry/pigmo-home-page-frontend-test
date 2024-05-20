import { useRef, useState } from "react";

export function useMouseCenteredPosition() {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;

    setMousePosition({ x, y });
  };

  return { ref, position: mousePosition, handleMouseMove };
}
