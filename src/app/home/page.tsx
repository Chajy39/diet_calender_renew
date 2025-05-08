"use client";

import Indicator from "@/components/Indicator";
import { NutrientType } from "@/types/UserType";
import dayjs from "dayjs";
import { useState } from "react";
import tw from "tailwind-styled-components";
import AddButton from "./AddButton";
import TodayChart from "./TodayChart";
import CalendarHeader from "./CalendarHeader";

const HomeWrap = tw.main`w-full h-full relative`;
const LoadingWrap = tw.div`fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center`;

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(
    dayjs(new Date())
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const data: NutrientType = {
    calorie: 700,
    carbo: 130,
    fat: 50,
    protein: 70,
  };

  return (
    <HomeWrap>
      {isLoading && (
        <LoadingWrap>
          <Indicator />
        </LoadingWrap>
      )}
      <CalendarHeader
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setIsLoading={setIsLoading}
      />
      <TodayChart data={data} />
      <AddButton />
    </HomeWrap>
  );
};
export default Home;
