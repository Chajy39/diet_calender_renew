"use client";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import weekday from "dayjs/plugin/weekday";
import Image, { ImageProps } from "next/image";
import {
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import tw from "tailwind-styled-components";

interface CalendarHeaderProps {
  selectedDate: dayjs.Dayjs;
  setSelectedDate: React.Dispatch<SetStateAction<dayjs.Dayjs>>;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
}

dayjs.locale("ko");

dayjs.extend(weekday);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const HeaderWrap = tw.header`pt-6 pb-4`;
const DateWrap = tw.div`flex items-center mx-4 mb-3`;
const DateButton = tw.button`px-2`;
const ButtonImg = tw(Image)<ImageProps>``;
const DayListWrap = tw.div`flex overflow-x-auto pb-2`;
const DayButton = tw.button`min-w-15 text-center mx-0.5 p-1 rounded-md font-semibold`;
const DateTitle = tw.p`flex-1 text-center font-semibold`;
const WeekText = tw.p`text-[0.75rem]`;

const CalendarHeader = ({
  selectedDate,
  setSelectedDate,
  setIsLoading,
}: CalendarHeaderProps) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs().startOf("month"));

  const scrollRef = useRef<HTMLDivElement>(null);

  const generateDays = () => {
    const start = currentMonth.startOf("month");
    const end = currentMonth.endOf("month");
    const days = [];

    for (let d = start; d.isSameOrBefore(end); d = d.add(1, "day")) {
      days.push(d);
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => prev.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => prev.add(1, "month"));
  };

  const handleDateSelect = (date: dayjs.Dayjs) => {
    setSelectedDate(date);
    console.log("선택된 날짜:", date.format("YYYY-MM-DD"));
  };

  const days = generateDays();

  useLayoutEffect(() => {
    if (!scrollRef.current || !selectedDate) return;

    const selectedIndex = days.findIndex((day) =>
      day.isSame(selectedDate, "day")
    );

    if (selectedIndex >= 0) {
      const containerWidth = scrollRef.current.getBoundingClientRect().width;
      const scrollX = selectedIndex * 64 - containerWidth / 2 + 64 / 2;

      scrollRef.current.scrollLeft = scrollX;
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!scrollRef.current || !selectedDate) return;

    const index = days.findIndex((d) => d.isSame(selectedDate, "day"));
    const containerWidth = scrollRef.current.getBoundingClientRect().width;
    const scrollX = index * 64 - containerWidth / 2 + 64 / 2;

    scrollRef.current.scrollTo({
      left: scrollX,
      behavior: "smooth",
    });
  }, [selectedDate]);

  return (
    <HeaderWrap>
      <DateWrap>
        <DateButton className="px-2" onClick={handlePrevMonth}>
          <ButtonImg src="/svg/ic_prev.svg" alt="next" width={20} height={20} />
        </DateButton>
        <DateTitle>{currentMonth.format("YYYY년 MM월")}</DateTitle>
        <DateButton className="px-2" onClick={handleNextMonth}>
          <ButtonImg src="/svg/ic_next.svg" alt="next" width={20} height={20} />
        </DateButton>
      </DateWrap>

      <DayListWrap ref={scrollRef}>
        {days.map((day) => (
          <DayButton
            className={`${
              selectedDate?.isSame(day, "day")
                ? "bg-[#44bb44] text-white"
                : "bg-transparent text-[#555555]"
            }`}
            key={day.format("YYYY-MM-DD")}
            onClick={() => handleDateSelect(day)}
          >
            {day.date()}
            <WeekText
              className={`${
                selectedDate?.isSame(day, "day")
                  ? "text-white"
                  : "text-[#999999]"
              }`}
            >
              {day.format("dd")}
            </WeekText>
          </DayButton>
        ))}
      </DayListWrap>
    </HeaderWrap>
  );
};
export default CalendarHeader;
