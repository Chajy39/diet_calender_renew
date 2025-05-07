"use client";

import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import weekday from "dayjs/plugin/weekday";
import { useRef, useState } from "react";
import "dayjs/locale/ko";

dayjs.locale("ko");

dayjs.extend(weekday);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const CalendarHeader = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs().startOf("month"));
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
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

  //   const handleScroll = () => {
  //     const scrollLeft = scrollRef.current?.scrollLeft || 0;
  //     const scrollWidth = scrollRef.current?.scrollWidth || 0;
  //     const clientWidth = scrollRef.current?.clientWidth || 0;

  //     // Near left
  //     if (scrollLeft === 0) {
  //       setCurrentMonth((prev) => prev.subtract(1, "month"));
  //     }
  //     // Near right
  //     if (scrollLeft + clientWidth >= scrollWidth) {
  //       setCurrentMonth((prev) => prev.add(1, "month"));
  //     }
  //   };

  const handleDateSelect = (date: dayjs.Dayjs) => {
    setSelectedDate(date);
    console.log("선택된 날짜:", date.format("YYYY-MM-DD"));
  };

  const days = generateDays();

  return (
    <div className="pt-6 pb-4">
      <div className="flex items-center mx-4 mb-3">
        <button className="px-2" onClick={handlePrevMonth}>
          ←
        </button>
        <h3 className="flex-1 text-center font-semibold">
          {currentMonth.format("YYYY년 MM월")}
        </h3>
        <button className="px-2" onClick={handleNextMonth}>
          →
        </button>
      </div>

      <div ref={scrollRef} className="flex overflow-x-auto pb-2">
        {days.map((day) => (
          <button
            className={`min-w-14 text-center mx-0.5 p-1 rounded-md ${
              selectedDate?.isSame(day, "day")
                ? "bg-[#44bb44] text-white"
                : "bg-transparent text-[#555555]"
            }`}
            key={day.format("YYYY-MM-DD")}
            onClick={() => handleDateSelect(day)}
          >
            <h5 className="font-semibold">{day.date()}</h5>
            <p
              className={`text-[0.75rem] ${
                selectedDate?.isSame(day, "day")
                  ? "text-white"
                  : "text-[#999999]"
              }`}
            >
              {day.format("dd")}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
export default CalendarHeader;
