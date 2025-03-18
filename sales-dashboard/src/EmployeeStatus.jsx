import React, { useState } from "react";

const tabs = ["Zone1", "Zone2", "Zone3", "Zone4"];

const contents = [

  [
    { name: "Ahmed", total: 12, customers: 8, coverage: "80%" },
    { name: "Haris", total: 14, customers: 9, coverage: "85%" },
    { name: "Ali", total: 10, customers: 15, coverage: "95%" },
  ],
  [
    { name: "Kumail", total: 15, customers: 12, coverage: "90%" },
    { name: "Murtaza", total: 10, customers: 7, coverage: "70%" },
    { name: "Ahmed", total: 8, customers: 10, coverage: "75%" },
  ],
  [
    { name: "Alyan", total: 10, customers: 7, coverage: "70%" },
    { name: "Sarah", total: 16, customers: 13, coverage: "95%" },
    { name: "Bilal", total: 7, customers: 14, coverage: "85%" },
  ],
  [
    { name: "Bilal", total: 18, customers: 15, coverage: "85%" },
    { name: "Mustafa", total: 11, customers: 8, coverage: "75%" },
    { name: "Ali", total: 10, customers: 15, coverage: "95%" },
  ],



]

function EmployeeStatus() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-gradient-to-r from-blue-700 to-purple-900 w-full h-screen mt-5 rounded-3xl border p-2 ">
      <div className="text-xl font-bold flex justify-center mb-4">
        Employee Status
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        {tabs.map((tab, index) => (
          <button
            onClick={() => setActiveTab(index)}
            key={`tab_${index}`}
            className={`px-6 py-2 m-2 rounded-md ${activeTab === index
              ? "bg-blue-700 text-white"
              : "bg-gray-400 hover:bg-blue-800 hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Customers</th>
              <th className="px-4 py-2">Coverage</th>
            </tr>
          </thead>
          <tbody>
            {contents[activeTab].map((item, index) => (
              <tr
                key={`row_${index}`}
                className="bg-gray-400 border-b hover:bg-gray-50"
              >
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.total}</td>
                <td className="px-4 py-2">{item.customers}</td>
                <td className="px-4 py-2">{item.coverage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeStatus;