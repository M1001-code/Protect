"use client";

import { useState } from "react";

type FlipCardProps = {
  front: string;
  back: string;
};

export default function FlipCard({ front, back }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        {/* Face avant */}
        <div className="flip-card-front">
          <h3 className="text-3xl font-bold text-white">{front}</h3>
        </div>

        {/* Face arrière */}
        <div className="flip-card-back">
          <p className="text-lg text-white">{back}</p>
        </div>
      </div>
    </div>
  );
}
