import * as React from "react";
import { SVGProps } from "react";
const DigitalMarketingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 15.065h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-14a3 3 0 0 1 3-3Zm3 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={25}
        x2={25}
        y1={0}
        y2={50}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEB900" />
        <stop offset={1} stopColor="#FC6D26" />
      </linearGradient>
    </defs>
  </svg>
);
export default DigitalMarketingIcon;
