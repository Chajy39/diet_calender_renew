"use client";

import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import weekday from "dayjs/plugin/weekday";
import { useRef, useState } from "react";

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
    <div
      style={{ padding: "16px", maxWidth: "100%", fontFamily: "sans-serif" }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}
      >
        <button onClick={handlePrevMonth}>←</button>
        <div style={{ flex: 1, textAlign: "center" }}>
          {currentMonth.format("YYYY년 MM월")}
        </div>
        <button onClick={handleNextMonth}>→</button>
      </div>

      <div
        ref={scrollRef}
        // onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          borderBottom: "1px solid #ccc",
          paddingBottom: "8px",
        }}
      >
        {days.map((day) => (
          <div
            key={day.format("YYYY-MM-DD")}
            onClick={() => handleDateSelect(day)}
            style={{
              minWidth: "80px",
              textAlign: "center",
              marginRight: "8px",
              padding: "8px",
              cursor: "pointer",
              backgroundColor: selectedDate?.isSame(day, "day")
                ? "#0070f3"
                : "transparent",
              color: selectedDate?.isSame(day, "day") ? "#fff" : "#000",
              borderRadius: "8px",
              flexShrink: 0,
            }}
          >
            <div>{day.date()}일</div>
            <div style={{ fontSize: "12px", color: "#666" }}>
              {day.format("dd")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CalendarHeader;
