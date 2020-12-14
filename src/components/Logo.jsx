import React from "react";
import "../static/css/fonts.css";
const Logo = (props) => {
  const cls1 = {
    fontSize: "180.69px",
    fill: "#148496",
  };
  const cls2 = {
    fontSize: "180.69px",
    fill: "#000",
  };
  const cls3 = {
    fill: "#none",
    strokeMiterlimit: "10",
    strokeWidth: "10px",
    stroke: "#000",
  };
  const cls4 = {
    fill: "none",
    strokeMiterlimit: "10",
    strokeWidth: "10px",
    stroke: "#148496",
  };

  return (
    <div style={{ display: "inline-block", padding: "0px" }}>
      <svg
        height={props.height}
        width={props.width}
        id="Logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 941.47 236.55"
      >
        <title>ebazaar</title>
        <text style={cls1} transform="translate(341.43 163.76)">
          E
          <tspan style={cls2} x="88.49" y="0">
            bazaar
          </tspan>
        </text>
        <line style={cls3} x1="316.81" y1="50.4" x2="175.11" y2="50.4" />
        <line style={cls3} x1="305.44" y1="109.14" x2="147.6" y2="109.14" />
        <line style={cls3} x1="311.3" y1="79.77" x2="161.19" y2="79.77" />
        <path
          style={cls4}
          d="M331.1,41S316,133.07,310.43,151.79,294.74,168.24,221,166.55c-39.62-.92-77.49,6.34-79.09-34.52-1.13-28.75,6.5-82.75-34-96.74-25.46-8.79-96.07-18-96.07-18"
          transform="translate(-11.15 -12.36)"
        />
        <path
          style={cls4}
          d="M144.38,200.83l142.32-.15c0-.62,51,4.89,47.05-18.78-2.65-16.86-38.13-14.43-50.81-14.43"
          transform="translate(-11.15 -12.36)"
        />
        <circle style={cls4} cx="298.97" cy="216.24" r="15.31" />
        <circle style={cls4} cx="151.17" cy="216.24" r="15.31" />
      </svg>
    </div>
  );
};

export default Logo;
