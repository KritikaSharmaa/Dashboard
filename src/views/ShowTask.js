import { useEffect, useState } from "react";
import fireDB from "../firebase.js";
import ShortUniqueId from "short-unique-id";
import EditTask from "../components/EditTask.js";
const ShowTask = () => {
  const [Retrive, SetRetrive] = useState([]);
  const uid = new ShortUniqueId();

  function ExtractFireStoreData() {
    // fireDB   //-->page need to be refreshed again and again for update on table
    //   .collection("Dashboard")
    //   .get()
    //   .then((querySnapshot) => {
    //     const snapshots = querySnapshot.docs.map((doc) => doc.data());
    //     SetRetrive(snapshots);
    //   });
    fireDB.collection("Dashboard").onSnapshot((querySelector) => {
      const items = [];
      querySelector.forEach((doc) => {
        items.push(doc.data());
      });
      SetRetrive(items);
    });
  }

  useEffect(() => {
    ExtractFireStoreData();
  }, []);
  return (
    <>
      <div className="w-full px-4 mt-5">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                {/*.. */}
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Title
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                start Date
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Last Date
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Role
                              </th>
                              <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {Retrive.map((person) => (
                              <tr key={person.ShortId}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                        {person.FirstName +
                                          " " +
                                          person.LastName}
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        {person.Email}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {person.Title}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="text-sm text-gray-500">
                                    {person.StartDate}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="text-sm text-gray-500">
                                    {person.SubDate}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    {person.Status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.Role}
                                </td>
                                <td className="-ml-10 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <span className=" text-indigo-600 hover:text-indigo-900 cursor-pointer">
                                    <EditTask person={person} />
                                  </span>
                                  <span
                                    className="cursor-pointer text-black hover:bg-yellow-500 hover:text-white font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
                                    onClick={(e) => {
                                      fireDB
                                        .collection("Dashboard")
                                        .doc(person.ShortId)
                                        .delete();
                                    }}
                                  >
                                    Delete
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShowTask;
