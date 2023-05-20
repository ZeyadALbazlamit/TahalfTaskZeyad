import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function Logout(props: SvgProps) {
  return (
    <Svg
      width={90}
      height={90}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.75 11.25A3.75 3.75 0 0015 15v60a3.75 3.75 0 003.75 3.75H37.5a3.75 3.75 0 110 7.5H18.75C12.537 86.25 7.5 81.213 7.5 75V15c0-6.213 5.037-11.25 11.25-11.25H37.5a3.75 3.75 0 110 7.5H18.75zM61.098 27.348a3.75 3.75 0 015.304 0l15 15a3.75 3.75 0 010 5.304l-15 15a3.75 3.75 0 01-5.304-5.304L73.447 45 61.098 32.652a3.75 3.75 0 010-5.304z"
        fill="#09BBB8"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 45a3.75 3.75 0 013.75-3.75h45a3.75 3.75 0 110 7.5h-45A3.75 3.75 0 0130 45z"
        fill="#09BBB8"
      />
    </Svg>
  )
}

export default Logout
