import React, { MouseEventHandler } from "react";

interface AngleUpProps {
  onClick?: MouseEventHandler;
}

function DoubleAngleUp(props: AngleUpProps) {
  const { onClick } = props;
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 30.727 30.727"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
      onClick={onClick}
    >
      <g>
        <path d="M15.362,30.229L0.732,15.601c-0.977-0.977-0.977-2.56,0-3.535c0.979-0.976,2.561-0.977,3.535,0l11.095,11.094 l11.096-11.094c0.978-0.977,2.56-0.977,3.534,0c0.978,0.979,0.979,2.562,0,3.535L15.362,30.229z M29.992,4.765 c0.979-0.978,0.979-2.561,0-3.535c-0.977-0.977-2.559-0.977-3.534,0L15.363,12.325L4.268,1.229c-0.979-0.977-2.56-0.977-3.535,0 c-0.976,0.978-0.977,2.56,0,3.535l14.632,14.631L29.992,4.765z" />
      </g>
    </svg>
  );
}

export default DoubleAngleUp;
