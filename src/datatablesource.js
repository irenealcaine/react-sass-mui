export const userColumns = [
  {
    field: "username",
    headerName: "Username",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "displayName",
    headerName: "Name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
];

export const productColumns = [
  {
    field: "product",
    headerName: "Product",
    width: 200,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.title}
    //     </div>
    //   );
    // },
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 100,
  },
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
];

export const orderColumns = [
  {
    field: "product",
    headerName: "Product",
    width: 200,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.title}
    //     </div>
    //   );
    // },
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
];
