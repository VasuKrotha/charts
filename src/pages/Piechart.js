import React from "react";
import { Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
export const Piechart = ({ tasklist }) => {
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

  const list = tasklist;
  const updatedList = Object.entries(
    list.reduce(
      (acc, cur) => ({ ...acc, [cur.City]: (acc[cur.City] || 0) + 1 }),
      {}
    )
  ).map(([name, count]) => ({ name, count }));
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      <PieChart
        width={400}
        height={400}
        margin={{ top: 0, right: 0, left: 0, bottom: 20 }}
      >
        <Pie
          data={updatedList}
          cx={200}
          cy={250}
          outerRadius={80}
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="count"
        >
          {updatedList.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};
