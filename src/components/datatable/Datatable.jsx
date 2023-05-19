import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, productColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, type), (snapShot) => {
      let list = [];
      snapShot.docs.forEach(
        (doc) => {
          list.push({ id: doc.id, ...doc.data() });
          setData(list);
        },
        (error) => {
          console.log(error);
        }
      );
    });

    return () => {
      unsub();
    };
  }, [type]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, type, id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      feld: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            {type === "users" ? (
              <div className="cellAction">
                <Link to={`/${type}/test`} style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
              </div>
            ) : (
              <div className="cellAction">
                <Link to={`/${type}/test`} style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {type}
        <Link to={`/${type}/new`} className="link">
          Add new
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={
          type === "users"
            ? userColumns.concat(actionColumn)
            : productColumns.concat(actionColumn)
        }
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
        className="datagrid"
      />
    </div>
  );
};

export default Datatable;
