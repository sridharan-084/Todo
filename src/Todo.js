import { Edit, SystemUpdateAltRounded } from "@material-ui/icons";
import React, { useState } from "react";

const Todo = () => {
  const [data, setData] = useState("");

  const [Arr, setArr] = useState([]);

  const [EditBtn, setEditBtn] = useState(false);

  const [EditId, setEditId] = useState("");

  // adding the new data over here //
  const update = () => {
    if (data === "") {
      alert("Please Enter Your Task First 👿");
    } else if (data !== "" && EditBtn === true) {
      const updata = Arr.map((e) => {
        if (e.id === EditId) {
          e.desc = data;
        }
        return e;
      });
      setArr(updata);
      setEditBtn(false);
      setEditId("");
    } else {
      const key = new Date().getTime().toString();
      const myarr = {
        desc: data,
        id: key,
      };
      setArr([...Arr, myarr]);
    }
    setData("");
  };

  const deletedata = (currid) => {
    console.log(Arr);
    const Adelete = Arr.filter((e) => {
      return e.id !== currid;
    });
    setArr(Adelete);
  };

  const EditData = (currid) => {
    const item = Arr.filter((e) => {
      return e.id === currid;
    });
    console.log(item);
    setEditBtn(true);
    setEditId(item[0].id);
    setData(item[0].desc);
  };

  return (
    <>
      <div className="grid justify-center">
        <h2 className="text-center text-black-500 font-bold text-4xl m-6 ml-0">
          TODO LIST
        </h2>
        <div>
          <input
            type="text"
            placeholder="✍ ADD  YOUR ITEM"
            className="outline-none w-96 h-10"
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></input>
          <button
            className="bg-black-50 h-10 w-8 outline-none font-bold text-xl ml-2 ring-offset-red-600 rounded-md"
            onClick={update}
          >
            ➕
          </button>
          {Arr.map((eve) => {
            return (
              <div className="w-96 h-15 bg-gray-400 mt-4 rounded">
                <p className="font-medium ml-1">{eve.desc}</p>
                <button
                  className="bg-red-50 h-auto w-auto outline-none font-small text-xl mt-2 mb-1 ml-2  rounded-md"
                  onClick={() => EditData(eve.id)}
                >
                  Edit📝
                </button>
                <button
                  className="bg-red-50 h-auto w-auto outline-none font-small text-xl mt-2 mb-1 ml-5  rounded-md"
                  onClick={() => deletedata(eve.id)}
                >
                  Delete🚫
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
