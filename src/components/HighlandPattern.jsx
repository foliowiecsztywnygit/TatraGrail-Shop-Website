import React from 'react'
import ciupaga from '../../assets/bg items/ciupaga.png'
import oscypek from '../../assets/bg items/oscypek.png'
import redykolka from '../../assets/bg items/redykolka.png'

export default function HighlandPattern({ className = "absolute inset-0 w-full h-full pointer-events-none z-0" }) {
  return (
    <svg className={className} style={{ opacity: 0.05, filter: 'brightness(0) invert(1)' }} preserveAspectRatio="none">
      <defs>
        {/* patternUnits="userSpaceOnUse" pozwala zdefiniować powtarzalny kafelek 300x300 pikseli */}
        <pattern id="highland-pattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
          <g transform="translate(40, 50) rotate(15)">
            <image href={ciupaga} x="-20" y="-20" width="40" height="40" />
          </g>
          <g transform="translate(180, 60) rotate(-10)">
            <image href={oscypek} x="-25" y="-25" width="50" height="50" />
          </g>
          <g transform="translate(90, 160) rotate(25)">
            <image href={redykolka} x="-22.5" y="-22.5" width="45" height="45" />
          </g>
          <g transform="translate(240, 190) rotate(-45)">
            <image href={ciupaga} x="-15" y="-15" width="30" height="30" />
          </g>
          <g transform="translate(45, 240) rotate(10)">
            <image href={oscypek} x="-17.5" y="-17.5" width="35" height="35" />
          </g>
          <g transform="translate(200, 270) rotate(-15)">
            <image href={redykolka} x="-20" y="-20" width="40" height="40" />
          </g>
        </pattern>
      </defs>
      {/* rect wypełnia SVG rozciągając wzór na całą wysokość i szerokość kontenera rodzica */}
      <rect x="0" y="0" width="100%" height="100%" fill="url(#highland-pattern)" />
    </svg>
  )
}
