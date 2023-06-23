import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Trainlist from './Trainlist';

function ManageTrain() {
  const [departureTimes, setDepartureTimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [selectedTrain, setSelectedTrain] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost/api/traindep.php')
      .then((res) => setDepartureTimes(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = departureTimes.slice(indexOfFirstRow, indexOfLastRow);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(departureTimes.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDeleteTrain = (trainId) => {
    axios
      .delete(`http://localhost/api/traindep.php?id=${trainId}`)
      .then((res) => {
        // Remove the deleted train from the departureTimes array
        const updatedDepartureTimes = departureTimes.filter(
          (time) => time.Departure_Time_ID !== trainId
        );
        setDepartureTimes(updatedDepartureTimes);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTrain = (trainId) => {
    // Set the selectedTrain state with the train object that needs to be updated
    const trainToUpdate = departureTimes.find((time) => time.Departure_Time_ID === trainId);
    setSelectedTrain(trainToUpdate);

    // Redirect to the update train page where the user can edit the train details
    // You can use react-router-dom to navigate to the update train page
    // For example: history.push('/update-train', { train: trainToUpdate });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AdminHeader />
      <div className="flex flex-grow w-full">
        <AdminSidebar />
        <div className="flex ml-16 flex-col items-center justify-center w-full">
          <div className="trainlist bg-white opacity-70 p-4 pt-1 text-2xl font-bold mb-5">
            <h1 className="text-emerald-900">Manage Departure Times</h1>
          </div>
          <div className="flex justify-center w-full py-2">
            <table className="w-2/3 opacity-100 border border-gray-200 rounded-sm">
              <thead className="bg-blue-400 py-2">
                <tr>
                  <th className="px-2 py-1 font-bold text-left">Departure Time ID</th>
                  <th className="px-2 py-1 font-bold text-left">Train Number</th>
                  <th className="px-2 py-1 font-bold text-left">Departure Time</th>
                  <th className="px-2 py-1 font-bold text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((time, index) => (
                  <tr key={index} className="bg-white">
                    <td className="px-2 py-1">{time.Departure_Time_ID}</td>
                    <td className="px-2 py-1">{time.TrainNumber}</td>
                    <td className="px-2 py-1">{time.DepartureTime}</td>
                    <td className="px-2 py-1">
                      <button
                        className="px-2 py-1 mr-2 text-sm bg-red-500 text-white rounded"
                        onClick={() => handleDeleteTrain(time.Departure_Time_ID)}
                      >
                        Delete
                      </button>
                      <button
                        className="px-2 py-1 text-sm bg-green-500 text-white rounded"
                        onClick={() => handleUpdateTrain(time.Departure_Time_ID)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 mr-2 text-sm bg-emerald-100 font-semibold text-gray-600 bg-gray-200 rounded"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 text-sm font-semibold bg-emerald-100 text-gray-600 bg-gray-200 rounded"
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(departureTimes.length / rowsPerPage)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageTrain;
