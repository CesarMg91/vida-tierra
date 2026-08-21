import type { ComponentPropsWithoutRef } from "react";

type BrandMarkProps = Omit<ComponentPropsWithoutRef<"svg">, "children" | "viewBox">;

export default function BrandMark(props: BrandMarkProps) {
  return (
    <svg {...props} viewBox="0 0 64 64" focusable="false">
      <circle cx="32" cy="32" r="28" fill="#0B0D0E" stroke="#B88949" strokeWidth="3.25" />
      <g fill="none" stroke="#779B88" strokeLinecap="round" strokeWidth="3.5">
        <path d="M13.5 30.5C17.7 20.1 24 15 32 15s14.3 5.1 18.5 15.5" />
        <path d="M17.5 37C21.3 28.8 26.1 25 32 25s10.7 3.8 14.5 12" />
        <path d="M22 43.25C24.9 37.8 28.1 35.5 32 35.5s7.1 2.3 10 7.75" />
      </g>
      <path d="M32 11.75V49" fill="none" stroke="#F2EADB" strokeLinecap="round" strokeWidth="2.4" />
      <g fill="#B88949" stroke="#F2EADB" strokeWidth="1.7">
        <circle cx="32" cy="15" r="3.1" />
        <circle cx="32" cy="25" r="3.1" />
        <circle cx="32" cy="35.5" r="3.1" />
        <circle cx="32" cy="48" r="6.25" strokeWidth="2.2" />
      </g>
    </svg>
  );
}
