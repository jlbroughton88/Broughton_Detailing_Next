import React from "react";

const MenuSVG = () => {

const style1 = {
    fillRule : "evenodd",
    clipRule : "evenodd",
    strokeLinejoin : "round",
    strokeMiterlimit : 2
}
const style2 = {
    fill: "#b3b3b3"
}


  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 209 209"
    //   version="1.1"
      style={style1}
    >
      <path
        d="M187.457,138.833c0,-0.874 -0.347,-1.712 -0.965,-2.33c-0.618,-0.618 -1.456,-0.965 -2.33,-0.965c-21.17,0 -137.859,0 -159.747,0c-0.938,0 -1.838,0.373 -2.502,1.036c-0.664,0.664 -1.037,1.564 -1.037,2.503c0,5.683 0,16.774 0,22.377c0,1.886 1.529,3.415 3.415,3.415c21.593,0 138.96,0 159.951,0c1.776,0 3.215,-1.439 3.215,-3.215c0,-5.614 0,-17.15 0,-22.821Z"
        style={style2}
        className="pathSVG"
      />
      <path
        d="M187.457,46.991c0,-0.874 -0.347,-1.712 -0.965,-2.33c-0.618,-0.618 -1.456,-0.965 -2.33,-0.965c-21.17,0 -137.859,0 -159.747,0c-0.938,0 -1.838,0.372 -2.502,1.036c-0.664,0.664 -1.037,1.564 -1.037,2.503c0,5.683 0,16.774 0,22.377c0,1.886 1.529,3.415 3.415,3.415c21.593,0 138.96,0 159.951,0c1.776,0 3.215,-1.44 3.215,-3.215c0,-5.615 0,-17.15 0,-22.821Z"
        style={style2}
      />
      <path
        d="M187.457,92.844c0,-0.874 -0.347,-1.712 -0.965,-2.33c-0.618,-0.618 -1.456,-0.966 -2.33,-0.966c-21.17,0 -137.859,0 -159.747,0c-0.938,0 -1.838,0.373 -2.502,1.037c-0.664,0.663 -1.037,1.564 -1.037,2.502c0,5.684 0,16.774 0,22.378c0,1.885 1.529,3.414 3.415,3.414c21.593,0 138.96,0 159.951,0c1.776,0 3.215,-1.439 3.215,-3.214c0,-5.615 0,-17.15 0,-22.821Z"
        style={style2}
      />
    </svg>
  );
};

export default MenuSVG;
