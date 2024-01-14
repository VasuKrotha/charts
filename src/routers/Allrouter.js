import { Route, Routes } from "react-router-dom";
import { Home, ShowTask, Chart } from "../pages";
import { useState, useEffect } from "react";
export const Allrouter = () => {
  const initialdata = [
    {
      Fullname: "Ramesh",
      company: "AAA",
      Email: "ramesh@23gmail.com",
      Phone: "12345678910",
      Employee_ID: "Empol@12",
      Salary: "15000",
      Job_Rol: "Front End Developer",
      City: "Chennai",
      id: 1705229637732,
    },
    {
      Fullname: "Surash",
      company: "BBB",
      Email: "suresh@32gamil.com",
      Phone: "12345431111",
      Employee_ID: "Empol@#",
      Salary: "25000",
      Job_Rol: "Back End Developer",
      City: "Kerala",
      id: 1705229724945,
    },
    {
      Fullname: "Ganesh",
      company: "CCC",
      Email: "ganesh23@gmail.com",
      Phone: "12345431111",
      Employee_ID: "Empol@34",
      Salary: "15000",
      Job_Rol: "Front End Developer",
      City: "Mumbai",
      id: 1705229797867,
    },
  ];
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || initialdata
  );
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);
  const [task, setTask] = useState(null);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasklist={tasklist}
              setTasklist={setTasklist}
              task={task}
              setTask={setTask}
            />
          }
        />
        <Route
          path="/task"
          element={
            <ShowTask
              tasklist={tasklist}
              setTasklist={setTasklist}
              task={task}
              setTask={setTask}
            />
          }
        />
        {/* <Route path="/chart" element={<Chart tasklist={tasklist} />} /> */}
      </Routes>
    </>
  );
};
