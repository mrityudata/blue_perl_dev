import React, { useState, useRef } from "react";
import { motion } from "motion/react";

interface BeforeAfterImageProps {
  before: string;
  after: string;
  labelBefore?: string;
  labelAfter?: string;
}

export default function BeforeAfterImage({
  before,
  after,
  labelBefore = "Prototype",
  labelAfter = "Shipped",
}: BeforeAfterImageProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 group cursor-ew-resize"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <img src={after} alt="After" className="absolute inset-0 h-full w-full object-cover" />

      {/* Before Image (Overlay) */}
      <div
        className="absolute inset-0 h-full overflow-hidden border-r-2 border-blue-500"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 h-full w-screen max-w-none object-cover"
          style={{ width: containerRef.current?.getBoundingClientRect().width }}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] uppercase tracking-widest font-bold">
        {labelBefore}
      </div>
      <div className="absolute top-4 right-4 z-10 px-2 py-1 bg-blue-600/80 backdrop-blur rounded text-[10px] uppercase tracking-widest font-bold text-white">
        {labelAfter}
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-px bg-blue-500"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-white/40 rounded-full" />
            <div className="w-1 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
