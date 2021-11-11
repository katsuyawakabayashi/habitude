import React, { useState } from "react";
import StreakList from "./StreakList";

const StreakPanel = () => {
  const [showStreakPanel, setShowStreakPanel] = useState(false);
  const handleShowStreakPanel = () => {
    setShowStreakPanel((cur) => !cur);
  };
  return (
    <div>
      <div className="p-4 rounded-lg bg-green-600">
        <div className="text-white">
          <div className="flex flex-row space-x-1">
            <div className="font-serif text-xl font-medium">
              Longest Streaks
            </div>
          </div>
        </div>
        <StreakList expanded={showStreakPanel} />
        <button
          onClick={handleShowStreakPanel}
          className="text-sm text-white italic"
        >
          show {showStreakPanel ? "less" : "more"}
        </button>
      </div>
    </div>
  );
};

export default StreakPanel;
