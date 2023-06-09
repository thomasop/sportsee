import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { DisplayRadarProptype } from "../../Type/proptype/PropTypes";
import { NewPerformanceData } from "../../Type/data/UserPerformance";

/**
 * React component - Display radar chart
 * @param {DisplayRadarProptype} Props
 * @param {PerformanceType | null} Props.data - performance data fetch in service
 * @return {JSX.Element}
 */
const DisplayRadar = ({ data }: DisplayRadarProptype): JSX.Element => {
  const [newData, setNewData] = useState<null | NewPerformanceData[]>(null);
  useEffect(() => {
    if (data) {
      const ar = [
        "Intensité",
        "Vitesse",
        "Force",
        "Endurance",
        "Energie",
        "Cardio",
      ];
      let setData = data.data.reverse().map((d, index) => {
        return {
          id: ar[index],
          ...d,
        };
      });
      setNewData(setData);
    }
  }, [data]);
  return (
    <>
      {newData && (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="70%"
            data={newData}
            margin={{ left: 40 }}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey={"id"}
              tick={{ fill: "white", fontSize: 15, dy: 4 }}
            />
            <Radar
              name="Mike"
              dataKey="kind"
              fill="#FF0101"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default DisplayRadar;
