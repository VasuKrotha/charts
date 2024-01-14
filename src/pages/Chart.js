import React from "react";
import { Piechart } from "./Piechart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DisplayChart } from "./DisplayChart";
export const Chart = ({ tasklist }) => {
  const barchart = tasklist.map((item) => ({
    name: item.Fullname,
    Salary: item.Salary,
  }));
  //const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <main>
      <div className="flex flex-row justify-around">
        <div>
          <DisplayChart tasklist={tasklist} />
          <div className="text-center text-2xl font-bold"> Roles </div>
        </div>
        <div>
          {" "}
          <Piechart tasklist={tasklist} />
          <div className="text-center text-2xl font-bold"> Cities </div>
        </div>
      </div>
      <div>
        <div className="ml-40 mt-6 ">
          <ResponsiveContainer width="80%" height={300}>
            <BarChart
              data={barchart}
              margin={{
                top: 5,
                right: 100,
                left: 100,
                bottom: 5,
              }}
              barSize={40}
            >
              <CartesianGrid strokeDasharray="3, 3"></CartesianGrid>
              <XAxis dataKey="name"></XAxis>
              <YAxis dataKey="Salary"></YAxis>
              <Tooltip></Tooltip>
              <Bar dataKey="Salary" fill="#8884d8" barGap={5}></Bar>
              <Bar dataKey="name" barGap={5}></Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="text-center text-2xl font-bold pr-12">
            {" "}
            High Pay Salary{" "}
          </div>
        </div>
      </div>
    </main>
  );
};
