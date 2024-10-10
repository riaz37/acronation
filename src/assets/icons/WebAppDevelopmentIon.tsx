import * as React from "react";
import { SVGProps } from "react";
const WebAppDevelopmentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <rect width={50} height={50} fill="url(#a)" rx={16} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M16.464 16.464C15 17.93 15 20.286 15 25c0 4.714 0 7.071 1.464 8.535C17.93 35 20.286 35 25 35c4.714 0 7.071 0 8.535-1.465C35 32.072 35 29.714 35 25s0-7.071-1.465-8.536C32.072 15 29.714 15 25 15s-7.071 0-8.536 1.464Zm2.96 6.056a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216.262-.29.287-.427.287-.513 0-.086-.025-.222-.287-.513-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056ZM30.75 28a.75.75 0 0 1-.75.75h-5a.75.75 0 1 1 0-1.5h5a.75.75 0 0 1 .75.75Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={50}
        y1={0}
        y2={50}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1877F2" />
        <stop offset={1} stopColor="#6A5AEA" />
      </linearGradient>
    </defs>
  </svg>
);
export default WebAppDevelopmentIcon;
