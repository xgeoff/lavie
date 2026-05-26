interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 200 }: LogoProps) {
  const scale = size / 200;
  return (
    <svg
      viewBox="0 0 320 220"
      width={320 * scale}
      height={220 * scale}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="10,110 160,10 310,110 160,210"
        fill="#1a1a1a"
        stroke="#1a1a1a"
        strokeWidth="3"
      />
      <g transform="translate(160, 72)">
        <ellipse cx="0" cy="18" rx="28" ry="6" fill="none" stroke="white" strokeWidth="2" />
        <path
          d="M-18,-8 L-15,14 Q-14,18 0,18 Q14,18 15,14 L18,-8 Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M15,-2 Q24,-2 24,8 Q24,16 15,14"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M-6,-14 Q-6,-22 0,-22 Q6,-22 6,-30"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-steam"
        />
        <path
          d="M2,-16 Q2,-24 8,-24 Q14,-24 14,-32"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-steam-delay"
        />
        <path
          d="M-10,-12 Q-10,-18 -5,-18 Q0,-18 0,-24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-steam-delay-2"
        />
      </g>
      <text
        x="160"
        y="160"
        textAnchor="middle"
        fill="white"
        fontFamily="Economica, sans-serif"
        fontSize="52"
        fontWeight="700"
        letterSpacing="4"
      >
        La Vie
      </text>
    </svg>
  );
}
