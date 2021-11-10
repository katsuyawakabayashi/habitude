import React from "react";
import Streak from "./Streak";

const StreakList = (props) => {
    if (!props.expanded) {
        return (
            <div className="mt-3 mb-3 p-3 rounded-lg bg-green-50">
            <table className="table-auto w-full">
                <tbody>
                <tr>
                    <td className="px-3 py-2 w-1/12">1</td>
                    <td>
                    <Streak />
                    </td>
                    <td>200🔥</td>
                </tr>
                </tbody>
            </table>
            </div>
        );
    } else {
        return (
        <div className="mt-3 mb-3 p-3 rounded-lg bg-green-50">
            <table className="table-auto w-full">
            <tbody>
                <tr>
                    <td className="px-3 py-2">1</td>
                    <td>
                    <Streak />
                    </td>
                    <td>200🔥</td>
                </tr>
                <tr>
                    <td className="px-3 py-2 w-1/12">2</td>
                    <td>
                    <Streak />
                    </td>
                    <td>100🔥</td>
                </tr>
                <tr>
                    <td className="px-3 py-2">3</td>
                    <td>
                    <Streak />
                    </td>
                    <td>50🔥</td>
                </tr>
                <tr>
                    <td className="px-3 py-2">4</td>
                    <td>
                    <Streak />
                    </td>
                    <td>25🔥</td>
                </tr>
                <tr>
                    <td className="px-3 py-2">5</td>
                    <td>
                    <Streak />
                    </td>
                    <td>1🔥</td>
                </tr>
            </tbody>
            </table>
        </div>
        );
    }
};

  
  export default StreakList;