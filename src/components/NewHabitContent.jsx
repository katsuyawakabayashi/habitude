import React from "react";
import { sendHabitToFirestore } from "../firebase";
import { useAuth } from "../firebase";
import { useRef } from "react";

const NewHabitContent = ({ setMainSection }) => {
  const handleMainSection = (e) => {
    setMainSection(e);
  };
  const habitNameRef = useRef();
  const currentUser = useAuth();

  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
      <div className="flex flex-col m-5 space-y-4">
        <div className="text-3xl">
          Everyday, I will:{" "}
          <input
            type="text"
            ref={habitNameRef}
            className="w-80 rounded-lg bg-gray-300 text-black p-2"
          ></input>
        </div>
        <button
          className="w-40 p-2 rounded-lg bg-green-600 dark:text-gray-300 hover:bg-green-700 text-white"
          onClick={() => {
            if (
              currentUser &&
              habitNameRef.current.value &&
              habitNameRef.current.value.replace(/\s/g, "").length
            ) {
              // accept input if value isn't empty or just white space
              sendHabitToFirestore(currentUser.uid, habitNameRef.current.value);
              handleMainSection("home");
            }
          }}
        >
          Add a habit
        </button>
      </div>
    </div>
  );
};

export default NewHabitContent;
