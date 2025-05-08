import { CSSProperties } from "react";
import tw from "tailwind-styled-components";

interface ProgressBarProps {
  value: number;
  maxValue: number;
  title?: string;
  width?: number;
  height?: number;
  color?: string;
  exceed?: boolean;
  showPercent?: boolean;
  customStyle?: CSSProperties;
}

const ProgressBarWrap = tw.div`text-[0.75rem] text-[#555555]`;
const BarWrap = tw.div`bg-[#eeeeee] rounded-sm`;
const ActiveBar = tw.div` transition-width duration-300
         'opacity-100 h-full rounded-sm transition-[width] 0.5s ease-in-out font-semibold p-0.5 pl-1 leading-none`;

const ProgressBar = ({
  value,
  maxValue,
  title,
  width,
  height,
  color,
  exceed,
  showPercent,
  customStyle,
}: ProgressBarProps) => {
  return (
    <ProgressBarWrap style={customStyle}>
      {title}
      <BarWrap
        className={`text-${value / maxValue > 0.45 ? "white" : "black"}`}
        style={{ width: `${width || "120"}px`, height: `${height || "12"}px` }}
      >
        <ActiveBar
          className={`${
            exceed && value > maxValue ? "bg-[#dd2222]" : `bg-[${color}]`
          }`}
          style={{
            width: `${Math.min((value / maxValue) * 100, 100)}%`,
            fontSize: `${height - 2 || 10}px`,
          }}
        >
          {showPercent && ((value / maxValue) * 100).toFixed(1) + "%"}
        </ActiveBar>
      </BarWrap>
    </ProgressBarWrap>
  );
};

export default ProgressBar;
