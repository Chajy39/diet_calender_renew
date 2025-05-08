"use client";

import ProgressBar from "@/components/ProgressBar";
import ProgressCircle from "@/components/ProgressCircle";
import { useWindowWidth } from "@/hooks/GetWindowSize";
import { NutrientType } from "@/types/UserType";

interface TodayChartProps {
  data: NutrientType;
}

const TodayChart = ({ data }: TodayChartProps) => {
  const barWidth = useWindowWidth() / 4;
  const barHeight = barWidth / 6;

  return (
    <>
      <div className="flex gap-10 p-6 justify-center">
        <ProgressCircle
          value={data.calorie}
          maxValue={1500}
          size={barWidth}
          strokeWidth={barHeight - 2}
          color={"#44bb44"}
          showPercent={true}
        />
        <div className="flex-1 flex flex-col">
          <p>칼로리</p>
          <p>{data.calorie} / 1500</p>
          <div className="w-full h-10 rounded-md bg-[#cecece]"></div>
        </div>
      </div>
      <div className="flex justify-between gap-2 m-6">
        <ProgressBar
          value={data.carbo}
          maxValue={300}
          width={barWidth}
          height={barHeight}
          color={"#44bb44"}
          exceed={true}
          title={"탄수화물"}
          showPercent={true}
        />
        <ProgressBar
          value={data.protein}
          maxValue={100}
          width={barWidth}
          height={barHeight}
          color={"#44bb44"}
          exceed={true}
          title={"단백질"}
          showPercent={true}
        />
        <ProgressBar
          value={data.fat}
          maxValue={40}
          width={barWidth}
          height={barHeight}
          color={"#44bb44"}
          exceed={true}
          title={"지방"}
          showPercent={true}
        />
      </div>
    </>
  );
};
export default TodayChart;
