import React, { MouseEventHandler } from "react";

interface ArrowLeftProps {
  onClick?: MouseEventHandler;
}

function ArrowLeft(props: ArrowLeftProps) {
  const { onClick } = props;
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <g>
        <path
          d="M5 12H19M5 12L11 6M5 12L11 18"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default ArrowLeft;
