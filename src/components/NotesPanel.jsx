import React, { useEffect, useState } from "react";

const NotesPanel = ({ startDate, endDate }) => {
  const [notes, setNotes] = useState("");

  const key = `${startDate?.toDateString()}_${endDate?.toDateString()}`;

  useEffect(() => {
    if (key) {
      const saved = localStorage.getItem(key);
      setNotes(saved || "");
    }
  }, [key]);

  useEffect(() => {
    if (key) {
      localStorage.setItem(key, notes);
    }
  }, [notes, key]);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">
        Notes {startDate && endDate ? "(Selected Range)" : ""}
      </h3>
      <p className="text-sm text-gray-500 mb-2">
        {startDate && endDate
          ? `${startDate.toDateString()} → ${endDate.toDateString()}`
          : "Select a date range"}
      </p>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full h-24 border rounded p-2"
        placeholder="Write your notes..."
      />
    </div>
  );
};

export default NotesPanel;
