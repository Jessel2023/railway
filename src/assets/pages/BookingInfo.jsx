import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

function BookingInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost/api/passenger.php')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AdminHeader />
      <div className="flex flex-grow w-full">
        <AdminSidebar />
        <div className="flex ml-16 flex-col items-center justify-center w-full">
          <div className="trainlist pt-1 text-2xl font-bold mb-5">
            <h1>Passenger's Booking Information</h1>
          </div>
          <div className="flex justify-center pl-20 w-full">
            <table className="w-full mb-10">
              <thead className="bg-emerald-400 border-b-2 border-gray-200">
                <tr>
                  <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">#</th>
                  <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">Train Number</th>
                  <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">Train Date</th>
                  <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">First Name</th>
                  <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">Last Name</th>
                  <th className="w-30 p-3 text-sm font-bold tracking-wide  text-left">Age</th>
                  <th className="w-30 p-3 text-sm font-bold tracking-wide text-left">Sex</th>
                  <th className="p-3 text-sm font-bold tracking-wide text-left">Address</th>
                  <th className="p-3 text-sm font-bold tracking-wide text-left">Reservation Status</th>
                  <th className="p-3 text-sm font-bold tracking-wide text-left">Category</th>
                  <th className="px-2 py-1 font-bold text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((passenger, index) => (
                  <tr key={index} className="bg-white">
                    <td>{passenger.TicketID}</td>
                    <td>{passenger.TrainNumber}</td>
                    <td>{passenger.TrainDate}</td>
                    <td>{passenger.Passenger_Fname}</td>
                    <td>{passenger.Passenger_Lname}</td>
                    <td>{passenger.Age}</td>
                    <td>{passenger.Sex}</td>
                    <td>{passenger.Address}</td>
                    <td>{passenger.ReservationStatus}</td>
                    <td>{passenger.Category}</td>
                    <td>
                      <button className="px-2 py-1 text-sm bg-blue-500 text-white rounded-lg mr-2">
                         Edit
                      </button>
                       <button className="px-2 py-1 text-sm bg-red-500 text-white rounded-lg">
                        Delete
                       </button>
                   </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingInfo;
