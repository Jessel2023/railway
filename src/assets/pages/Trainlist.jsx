import React, { useEffect, useState } from "react";
import axios from "axios";

const Trainlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/api/trainlist.php")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (trainId) => {
    // Handle edit logic for the selected train
    console.log("Edit train:", trainId);
  };

  const handleDelete = (trainId) => {
    // Handle delete logic for the selected train
    console.log("Delete train:", trainId);
  };

  return (
    <div className="bg-white-400 w-full h-full">
      <div className="trainlist pt-3 text-2xl font-bold ml-8 place-content-center">
        <h1 className="text-emerald-900">Train List Available</h1>
      </div>
      <div className="flex place-content-center px-10">
        <table className="w-full mb-10">
          <thead className="bg-emerald-400 border-b-2 border-gray-200">
            <tr>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">#</th>
              <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">Train Name</th>
              <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">Source</th>
              <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">Destination</th>
              <th className="w-30 p-3 text-sm font-bold tracking-wide  text-left">AC Fare</th>
              <th className="w-30 p-3 text-sm font-bold tracking-wide text-left">General Fare</th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">Weekdays Available</th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((train, index) => (
              <tr key={index} className="bg-white">
                <td className="p-4 text-sky-600 font-semibold">{train.TrainNumber}</td>
                <td>{train.TrainName}</td>
                <td>{train.Source}</td>
                <td>{train.Destination}</td>
                <td>{train.AC_Fare}</td>
                <td>{train.General_Fare}</td>
                <td>{train.WeekdaysAvailable}</td>
                <td>
                  <button className="edit-button bg-primary" onClick={() => handleEdit(train.id)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(train.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trainlist;
