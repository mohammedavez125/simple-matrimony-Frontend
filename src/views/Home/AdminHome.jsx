import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useRef } from "react";

function AdminHome({ userData }) {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    getPaginatedUsers();
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://13.201.190.95:5000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getPaginatedUsers();
        });
    } else {
      // User clicked Cancel
    }
  };

  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getPaginatedUsers();
  };

  const changeLimit = () => {
    currentPage.current = 1;
    getPaginatedUsers();
  };

  const getPaginatedUsers = () => {
    fetch(
      `http://13.201.190.95:5000/paginatedUsers?page=${currentPage.current}&limit=${limit}`,
      {
        method: "GET",
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setPageCount(data.pageCount);
        setData(data.result);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl w-full space-y-8">
        <div className="bg-white p-8 rounded shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Welcome Admin</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">User Type</th>
                <th className="border p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user._id}>
                  <td className="border p-2">{user.fname}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">{user.userType}</td>
                  <td className="border p-2">
                    {/* Add your delete icon or button here */}
                    {/* Example:
                    <button onClick={() => deleteUser(user._id, user.fname)}>
                      Delete
                    </button>
                    */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            marginPagesDisplayed={2}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            forcePage={currentPage.current - 1}
          />
          <div className="flex items-center mt-4">
            <input
              placeholder="Limit"
              onChange={(e) => setLimit(e.target.value)}
              className="border p-2 mr-2"
            />
            <button
              onClick={changeLimit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Set Limit
            </button>
          </div>
          <button
            onClick={logOut}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
