import React, { useState } from "react";
import fireDB from "../firebase";

export default function EditTask({ person }) {
  const [showModal, setShowModal] = React.useState(false);
  const [UpTicket, SetUpTicket] = useState({
    // FirstName: "",
    // LastName: "",
    // Title: "",
    // Email: "",
    // StartDate: "",
    // SubDate: "",
    // Status: "",
    // Role: "",
    // ShortId: "",
    ...person,
  });
  const HandleUpTicketInput = (e) => {
    SetUpTicket((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const HandleUpdate = () => {
    fireDB.collection("Dashboard").doc(person.ShortId).set(UpTicket);
    //close modal
    setShowModal(false);
  };
  return (
    <>
      <button
        className=" text-black hover:bg-yellow-500 hover:text-white font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={(e) => {
          //console.log(e.currentTarget.parentNode.getAttribute("key"));
          setShowModal(true);
        }}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mt-96 sm:mt-6 mb-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-bold text-black">
                    Update Tickets
                  </h3>
                  <button
                    className="font-bold text-gray-800 text-xl -mr-1 -mt-3"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                {/** */}
                <div className="mt-10 mb-10 ml-5 ">
                  <div className="md:grid">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <form onSubmit={HandleUpdate}>
                        <div className="shadow-lg overflow-hidden sm:rounded-md md:mr-5">
                          <div className="px-4 py-5 bg-white sm:p-6 h-4/5 overflow-y-auto ">
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  value={UpTicket.FirstName}
                                  name="FirstName"
                                  onChange={HandleUpTicketInput}
                                  className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="last-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  value={UpTicket.LastName}
                                  name="LastName"
                                  onChange={HandleUpTicketInput}
                                  className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="title"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Title
                                </label>
                                <input
                                  type="text"
                                  value={UpTicket.Title}
                                  name="Title"
                                  onChange={HandleUpTicketInput}
                                  className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="email-address"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Email address
                                </label>
                                <input
                                  type="text"
                                  value={UpTicket.Email}
                                  name="Email"
                                  onChange={HandleUpTicketInput}
                                  className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="start-date"
                                  className="block text-sm font-medium text-black"
                                >
                                  Starting Date
                                </label>
                                <input
                                  type="date"
                                  value={UpTicket.StartDate}
                                  name="StartDate"
                                  onChange={HandleUpTicketInput}
                                  className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="last-date"
                                  className="block text-sm font-medium text-black"
                                >
                                  LastDate
                                </label>
                                <input
                                  type="date"
                                  value={UpTicket.SubDate}
                                  name="SubDate"
                                  onChange={HandleUpTicketInput}
                                  className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="status"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Status
                                </label>

                                <select
                                  name="Status"
                                  onChange={HandleUpTicketInput}
                                  className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm text-black "
                                >
                                  <option>{UpTicket.Status}</option>
                                  <option>On going</option>
                                  <option>Completed</option>
                                  <option>Late</option>
                                </select>
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="role"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Role
                                </label>
                                <input
                                  type="text"
                                  value={UpTicket.Role}
                                  name="Role"
                                  onChange={HandleUpTicketInput}
                                  className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                                />
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
