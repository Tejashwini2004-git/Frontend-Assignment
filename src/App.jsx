import React from "react";
import Calendar from "./components/Calendar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] p-4 md:p-10">
      <h1 className="text-white text-2xl md:text-4xl font-bold mb-6">
        Interactive Wall Calendar
      </h1>
      <Calendar />
    </div>
  );
}
