import React from "react";
import { Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
export const DisplayChart = ({ tasklist }) => {
  const list = tasklist;
  const piechartwithneedle = Object.entries(
    list.reduce(
      (acc, cur) => ({ ...acc, [cur.Job_Rol]: (acc[cur.Job_Rol] || 0) + 1 }),
      {}
    )
  ).map(([name, count]) => ({ name, count }));
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8042ff",
    "#ff4263",
    "#8042ff",
    "#42c1ff",
  ];
  return (
    <div>
      <PieChart
        width={400}
        height={400}
        margin={{ top: 0, right: 0, left: 0, bottom: 20 }}
      >
        <Pie
          data={piechartwithneedle}
          cx={200}
          cy={250}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="count"
          labelLine={false}
        >
          {piechartwithneedle.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};
