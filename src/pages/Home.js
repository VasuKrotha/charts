import { useState } from "react";

import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Home = ({ tasklist, setTasklist, task, setTask }) => {
  const [data, setdata] = useState(
    task || {
      Fullname: "",

      company: "",
      Email: "",
      Phone: "",
      Employee_ID: "",
      Salary: "",

      Job_Rol: "",
      City: "",
    }
  );
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const date = new Date();
    setdata((predata) => ({
      ...predata,
      id: date.getTime(),

      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    if (task !== null) {
      const update = tasklist.map((item) =>
        item.id === task.id
          ? {
              id: task.id,
              Fullname: e.target.Fullname.value,

              company: e.target.company.value,
              Email: e.target.Email.value,
              Phone: e.target.Phone.value,
              Employee_ID: e.target.Employee_ID.value,
              Salary: e.target.Salary.value,

              Job_Rol: e.target.Job_Rol.value,
              City: e.target.City.value,
            }
          : item
      );

      setTasklist(update);
      setdata({
        Fullname: "",

        company: "",
        Email: "",
        Phone: "",
        Employee_ID: "",
        Salary: "",

        Job_Rol: "",
        City: "",
      });
      setTask({});
    } else {
      setTasklist([...tasklist, data]);
      setdata({
        Fullname: "",

        company: "",
        Email: "",
        Phone: "",
        Employee_ID: "",
        Salary: "",

        Job_Rol: "",
        City: "",
      });
    }

    navigate("/task");
  };
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(data.Email);
    setIsValidEmail(isValid);
  };
  const validatePhoneNumber = () => {
    const phoneRegex = /^\d{9}$/;
    const isValid = phoneRegex.test(data.Phone);
    setIsValidPhoneNumber(isValid);
  };

  return (
    <main>
      <div className="flex flex-col lg:flex-row dark:bg-gray-900 dark:text-white justify-around p-28 ">
        <div className=" my-6 w-1/2">
          <h1 className="text-4xl font-bold">
            Sell Default Loans <br /> With Us
          </h1>
          <p className="my-10 overflow-hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam
            officia quis nostrum .
          </p>
          <Link to={"/task"}>
            <button className="w-72 bg-white hover:bg-white p-2 text-black rounded-lg text-xl font-semibold">
              View Chart
            </button>
          </Link>
        </div>
        <div className=" my-5 bg-blue-400 lg:max-w-xl   mx-1  ">
          <img
            src="https://www.shutterstock.com/image-photo/technical-controller-working-his-workstation-260nw-669226183.jpg"
            alt="img"
            className="max-h-full rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-row justify-around mx-40 my-3">
        <div className="flex flex-col  ">
          <div className="text-4xl font-bold">Why Sell Debt?</div>
          <div className="text-sm w-3/4  my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            quia repudiandae accusantium, libero quibusdam molestias amet odio
            molestiae sit eveniet, quod autem asperiores facilis officia harum
            vel veritatis in. Asperiores minima repellendus quo aliquam aut!
            Iusto reprehenderit adipisci accusantium nam aspernatur a
            praesentium iste enim facilis beatae, mollitia ut architecto
            deleniti at expedita. Quam quas neque autem ea expedita!
          </div>

          <div className="text-sm w-3/4 my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            quia repudiandae accusantium, libero quibusdam molestias amet odio
            molestiae sit eveniet, quod autem asperiores facilis officia harum
            vel veritatis in. Asperiores minima repellendus quo aliquam aut!
            Iusto reprehenderit adipisci accusantium nam aspernatur a
            praesentium iste enim facilis beatae, mollitia ut architecto
            deleniti at expedita. Quam quas neque autem ea expedita!
          </div>
          <div className="text-sm w-4/5 my-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            quia repudiandae accusantium, libero quibusdam molestias amet odio
            molestiae sit eveniet, quod autem asperiores facilis officia harum
            vel veritatis in. Asperiores minima repellendus quo aliquam aut!
            Iusto reprehenderit adipisci accusantium nam aspernatur a
            praesentium iste enim facilis beatae, mollitia ut architecto
            deleniti at expedita. Quam quas neque autem ea expedita!
          </div>
          <div className="text-sm w-4/5 my-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            quia repudiandae accusantium, libero quibusdam molestias amet odio
            molestiae sit eveniet, quod autem asperiores facilis officia harum
            vel veritatis in. Asperiores minima repellendus quo aliquam aut!
            Iusto reprehenderit adipisci accusantium nam aspernatur a
            praesentium iste enim facilis beatae, mollitia ut architecto
            deleniti at expedita. Quam quas neque autem ea expedita!
          </div>
        </div>
        <div>
          <form
            className="container py-10 px-10 mx-0 min-w-full grid place-items-center bg-gray-900 rounded-lg text-white"
            onSubmit={handleSubmit}
          >
            <div className="text-2xl my-2 p-1 capitalize">Fill the form</div>
            <div className="my-3">
              <label className="uppercase">Full name</label>
              <input
                type="text"
                name="Fullname"
                value={data.Fullname}
                onChange={handleInputChange}
                className="rounded text-black"
              />
            </div>
            {/* <div className="my-3">
              <label>Lastname</label>
              <input
                type="text"
                name="Lastname"
                value={data.Lastname}
                onChange={handleInputChange}
                className="rounded"
              />
            </div> */}
            <div className="my-3">
              <label className="uppercase">Company </label>
              <input
                type="text"
                name="company"
                value={data.company}
                onChange={handleInputChange}
                className="rounded text-black"
              />
            </div>
            <div className="my-3">
              <label className="uppercase">Email</label>
              <input
                type="text"
                name="Email"
                value={data.Email}
                onChange={handleInputChange}
                onBlur={validateEmail}
                className="rounded text-black"
              />
              {isValidEmail ? null : (
                <div style={{ color: "red" }}>Invalid email address</div>
              )}
            </div>
            <div className="my-3">
              <label className="uppercase">Phonenumber</label>
              <input
                type="number"
                name="Phone"
                value={data.Phone}
                onChange={handleInputChange}
                className="rounded text-black"
                onBlur={validatePhoneNumber}
              />
              {isValidPhoneNumber ? null : (
                <div style={{ color: "red" }}>
                  {" "}
                  phone number should be min 10 numbers
                </div>
              )}
            </div>
            <div className="my-3">
              <label className="uppercase">City </label>
              <input
                type="text"
                name="City"
                value={data.City}
                onChange={handleInputChange}
                className="rounded text-black"
              />
            </div>
            <div className="my-3">
              <label className="uppercase">Employee ID</label>
              <input
                type="text"
                name="Employee_ID"
                value={data.Employee_ID}
                onChange={handleInputChange}
                className="rounded text-black"
              />
            </div>
            <div className="my-3">
              <label className="uppercase">Monthly Salary</label>
              <input
                type="text"
                name="Salary"
                value={data.Salary}
                onChange={handleInputChange}
                className="rounded text-black"
              />
            </div>

            <div className="my-3">
              <label className="mx-2 uppercase">Job Role</label>
              <select
                value={data.Job_Rol}
                onChange={handleInputChange}
                className="w-full rounded p-1 text-black"
                name="Job_Rol"
              >
                <option value="">Select an option</option>
                <option value="Front End Developer">Front End Developer</option>
                <option value="Back End Developer">Back End Developer</option>
                <option value="UI UX Desiner">UI UX Desiner</option>
              </select>
            </div>

            <button
              className="bg-purple-900 text-white hover:bg-purple-600 font-bold py-2 px-4 mt-3 rounded items-center"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
