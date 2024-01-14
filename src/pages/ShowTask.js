import React from "react";
import { Chart } from "./Chart";
import { useNavigate } from "react-router-dom";
export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const navgiation = useNavigate();
  const handleDelete = (id) => {
    const updatetask = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updatetask);
  };

  const handleEdit = (item) => {
    const selecttask = item;

    setTask(selecttask);
    navgiation("/");
  };
  return (
    <main>
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-white">
              <th scope="col" className="px-6 py-3 text-sm">
                Full NAme
              </th>

              <th scope="col" className="px-6 py-3 text-sm">
                Company
              </th>
              <th scope="col" className="px-6 py-3 text-sm">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-sm">
                Phone no
              </th>
              <th scope="col" className="px-6 py-3 text-sm">
                update_btn
              </th>
              <th scope="col" className="px-6 py-3 text-sm">
                Delete_Btn
              </th>
            </tr>
          </thead>
          {tasklist.map((item) => (
            <tbody key={item.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.Fullname}
                </th>

                <td className="px-6 py-4">{item.company}</td>
                <td className="px-6 py-4">{item.Email}</td>
                <td className="px-6 py-4">{item.Phone}</td>
                <td className="px-6 py-4">
                  {" "}
                  <button
                    className=" py-2 px-4 bg-green-600 text-white rounded font-bold"
                    onClick={() => handleEdit(item)}
                  >
                    Update
                  </button>
                </td>
                <td className="px-6 py-4">
                  {" "}
                  <button
                    className=" py-2 px-4 text-white bg-red-600 rounded font-bold"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="w-4/5 ml-32 ">
        <Chart tasklist={tasklist} />
      </div>
    </main>
  );
};
