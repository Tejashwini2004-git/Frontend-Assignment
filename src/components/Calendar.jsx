import React, { useState } from "react";
import DayCell from "./DayCell";
import NotesPanel from "./NotesPanel";
import { motion } from "framer-motion";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const handleDateClick = (date) => {
    if (!startDate || endDate) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const changeMonth = (dir) => {
    const newDate = new Date(year, month + dir, 1);
    setCurrentDate(newDate);
    setStartDate(null);
    setEndDate(null);
  };

  const isInRange = (date) =>
    startDate &&
    endDate &&
    date.getTime() > startDate.getTime() &&
    date.getTime() < endDate.getTime();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Top Image */}
      <div className="relative h-64 md:h-80">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
          {currentDate.toLocaleString("default", { month: "long" })}
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="p-4 md:p-8 grid md:grid-cols-2 gap-6">
        {/* Calendar */}
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => changeMonth(-1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              ◀
            </button>

            <h2 className="text-lg font-semibold">
              {currentDate.toLocaleString("default", { month: "long" })} {year}
            </h2>

            <button
              onClick={() => changeMonth(1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              ▶
            </button>
          </div>

          {/* Day Labels */}
          <div className="grid grid-cols-7 text-center font-semibold mb-2 text-gray-600">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty spaces */}
            {[...Array(firstDay)].map((_, i) => (
              <div key={i}></div>
            ))}

            {/* Days */}
            {[...Array(daysInMonth)].map((_, i) => {
              const date = new Date(year, month, i + 1);
              const today = new Date();
              const isToday = date.toDateString() === today.toDateString();

              return (
                <DayCell
                  key={i}
                  date={date}
                  onClick={handleDateClick}
                  isStart={date.getTime() === startDate?.getTime()}
                  isEnd={date.getTime() === endDate?.getTime()}
                  isInRange={isInRange(date)}
                  isToday={isToday}
                />
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <NotesPanel startDate={startDate} endDate={endDate} />
      </div>
    </motion.div>
  );
};

export default Calendar;
