import React from "react";
import Streak from "./Streak";

const StreakList = () => {
  return (
    <div>
      Highest Streaks
      <table>
        <tr>
          <td>👑</td>
          <td><Streak /></td>
          <td>200🔥</td>
        </tr>
        <tr>
          <td>2</td>
          <td><Streak /></td>
          <td>100🔥</td>
        </tr>
        <tr>
          <td>3</td>
          <td><Streak /></td>
          <td>28🔥</td>
        </tr>
        <tr>
          <td>4</td>
          <td><Streak /></td>
          <td>25🔥</td>
        </tr>
        <tr>
          <td>5</td>
          <td><Streak /></td>
          <td>22🔥</td>
        </tr>
      </table>
    </div>
  );
};

export default StreakList;
