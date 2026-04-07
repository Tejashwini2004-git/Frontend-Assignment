import React from "react";

const DayCell = ({ date, onClick, isStart, isEnd, isInRange, isToday }) => {
  return (
    <div
      onClick={() => onClick(date)}
      className={`h-12 flex items-center justify-center rounded-lg cursor-pointer transition-all font-medium
        ${isToday ? "border-2 border-red-400" : ""}
 ${isStart ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105" : ""}
${isEnd ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white scale-105" : ""}
  ${isInRange ? "bg-blue-100" : ""}
  hover:bg-gray-200 hover:scale-105`}
    >
      {date.getDate()}
    </div>
  );
};

export default DayCell;
