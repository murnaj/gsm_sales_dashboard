import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Select, Option } from "@material-tailwind/react"




const tabs = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const initialContents = [
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
];

function EmployeeStatus() {
  const [activeTab, setActiveTab] = useState(0);
  const [contents, setContents] = useState(initialContents);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newRow, setNewRow] = useState({ name: "", total: "", customers: "", coverage: "" });
  const [showForm, setShowForm] = useState(false);

  const handleSaveEdit = () => {
    const updatedTab = contents[activeTab].map((item, index) =>
      index === editingIndex ? newRow : item
    );
    const updatedContents = [...contents];
    updatedContents[activeTab] = updatedTab;
    setContents(updatedContents);
    setEditingIndex(null);
    setNewRow({ name: "", total: "", customers: "", coverage: "" });
  };

  const handleAddRow = () => {
    if (!newRow.name || !newRow.total || !newRow.customers || !newRow.coverage) {
      alert("Please fill out all fields before adding.");
      return;
    }
    const updatedTab = [...contents[activeTab], newRow];
    const updatedContents = [...contents];
    updatedContents[activeTab] = updatedTab;
    setContents(updatedContents);
    setShowForm(false);
    setNewRow({ name: "", total: "", customers: "", coverage: "" });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewRow(contents[activeTab][index]);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedTab = contents[activeTab].filter((_, i) => i !== index);
    const updatedContents = [...contents];
    updatedContents[activeTab] = updatedTab;
    setContents(updatedContents);
  };




  return (
    <div className=" min-w-full md:min-w-fit h-screen mt-5  m-2">
      <div className="text-xl font-bold flex-end flex md:justify-center  mb-4">Run Sale


        <div className="w-0 ml-2 bg-white">
          <Select label="Select Year">
            <Option>2025</Option>
            <Option>2024</Option>
            <Option>2023</Option>
            <Option>2022</Option>
            <Option>2021</Option>
          </Select>
        </div>

      </div>

      <div className=" grid-cols-4 gap-3 md:flex-row md:flex justify-center items-center  mb-4">
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
      <div className="overflow-x-auto ">
        <table className="  md:w-full  text-sm text-left text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Customers</th>
              <th className="px-4 py-2">Coverage</th>
              <th className="px-2 py-2 text-center">Action</th>
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
                <td className="px-2 py-2 flex justify-center gap-1">
                  <button onClick={() => handleEdit(index)}>
                    <BsFillPencilFill />
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <BsFillTrashFill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showForm && (
          <div className="mt-4 border p-4 rounded bg-gray-100">
            <h2 className="text-lg font-bold mb-2">
              {editingIndex !== null ? "Edit Row" : "Add New Row"}
            </h2>
            <div className="flex gap-4 mb-2">
              <input
                type="text"
                placeholder="Name"
                value={newRow.name}
                onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
                className="px-2 py-1 border rounded w-full"
              />
              <input
                type="number"
                placeholder="Total"
                value={newRow.total}
                onChange={(e) => setNewRow({ ...newRow, total: e.target.value })}
                className="px-2 py-1 border rounded w-full"
              />
              <input
                type="number"
                placeholder="Customers"
                value={newRow.customers}
                onChange={(e) => setNewRow({ ...newRow, customers: e.target.value })}
                className="px-2 py-1 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Coverage"
                value={newRow.coverage}
                onChange={(e) => setNewRow({ ...newRow, coverage: e.target.value })}
                className="px-2 py-1 border rounded w-full"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={editingIndex !== null ? handleSaveEdit : handleAddRow}
                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
              >
                {editingIndex !== null ? "Save" : "Add"}
              </button>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingIndex(null);
                  setNewRow({ name: "", total: "", customers: "", coverage: "" });
                }}
                className="px-4 py-2 bg-gray-400 text-black rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="mt-4 px-4 py-2 bg-gray-400 hover:bg-blue-800 hover:text-white"
          >
            Add New Row
          </button>
        )}
      </div>
    </div>
  );
}

export default EmployeeStatus;
