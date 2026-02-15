import React from "react";

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Vintage Ink Bottle */}
    <path d="M30 40 H70 L75 60 Q72 78 50 80 Q28 78 25 60 Z" />
    <rect x="38" y="25" width="24" height="12" rx="2" />

    {/* Quill Inside the Bottle */}
    <path d="M50 25 C48 15 55 8 65 6 C70 5 72 8 70 12 C67 18 58 23 55 32 C53 37 52 45 50 52" />

    {/* Small feather veins (subtle minimal detail) */}
    <path d="M58 18 L63 14" strokeWidth="2" />
    <path d="M56 22 L61 19" strokeWidth="2" />
    <path d="M54 26 L59 24" strokeWidth="2" />
  </svg>
);
