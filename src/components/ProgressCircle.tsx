"use client";

interface ProgressCircleProps {
  value: number;
  maxValue: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  exceed?: boolean;
  showPercent?: boolean;
}

const ProgressCircle = ({
  value,
  maxValue,
  size,
  strokeWidth,
  color,
  exceed,
  showPercent,
}: ProgressCircleProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / maxValue) * circumference;

  return (
    <svg width={size} height={size}>
      <circle
        stroke="#eeeeee"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke={`${
          exceed && value > maxValue ? "#dd2222" : color ? color : "#44dd44"
        }`}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.3s" }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="4vw"
        fontWeight="600"
        fill="#555555"
      >
        {showPercent && ((value / maxValue) * 100).toFixed(1)}%
      </text>
    </svg>
  );
};

export default ProgressCircle;
