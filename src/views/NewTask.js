import { useState } from "react";
import fireDb from "../firebase.js";
import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId();
// fireDb.firestore().collection("Dashboard").add({
//   name: "kritika",
//   lastname: "Sharma",
//   title: "devoxx",
//   email: "kriti@mail.com",
//   StartDate: "16.06.21",
//   LastDate: "19.07.21",
//   status: "ongoing",
//   role: "admin",
// });

const NewTask = () => {
  const [NewTicket, SetNewTicket] = useState({
    FirstName: "",
    LastName: "",
    Title: "",
    Email: "",
    StartDate: "",
    SubDate: "",
    Status: "",
    Role: "",
  });

  const HandleTicketInput = (e) => {
    SetNewTicket((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const SaveNewTicket = (e) => {
    e.preventDefault();
    fireDb.collection("Dashboard").doc(uid()).set(NewTicket);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <>
      {/* <div className="w-full px-4 mt-5">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                .. */}
      {/* <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-5">
                    <div className="border-t border-gray-200" />
                  </div>
                </div> */}
      <div className="mt-16">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 md:ml-5">
              <h3 className="text-xl font-bold leading-6 text-gray-900">
                Assign New Ticket
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Please fill All the details
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={SaveNewTicket}>
              <div className="shadow-lg overflow-hidden sm:rounded-md md:mr-5">
                <div className="px-4 py-5 bg-white sm:p-6">
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
                        name="FirstName"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                        onChange={HandleTicketInput}
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
                        name="LastName"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                        onChange={HandleTicketInput}
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
                        name="Title"
                        id="title"
                        autoComplete="family-name"
                        className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                        onChange={HandleTicketInput}
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
                        name="Email"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                        onChange={HandleTicketInput}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="start-date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Starting Date
                      </label>
                      <input
                        type="date"
                        name="StartDate"
                        id="start-date"
                        className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                        onChange={HandleTicketInput}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Submission Date
                      </label>
                      <input
                        type="date"
                        name="SubDate"
                        id="last-date"
                        className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                        onChange={HandleTicketInput}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="status"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Status
                      </label>
                      {/* <input
                        type="text"
                        name="status"
                        id="status"
                        autoComplete="family-name"
                        className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                      /> */}
                      <select
                        name="Status"
                        className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                        onChange={HandleTicketInput}
                      >
                        <option>Current Status</option>
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
                        name="Role"
                        id="role"
                        autoComplete="family-name"
                        className="mt-1 block w-full h-10 shadow-lg focus:outline-none border-l-4 border-yellow-600 sm:text-sm "
                        onChange={HandleTicketInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      {/* ..
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default NewTask;
