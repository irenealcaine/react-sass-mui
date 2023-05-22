export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },

  {
    field: "username",
    headerName: "Username",
    width: 180,
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
    width: 180,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 180,
  },
];

export const productColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "product",
    headerName: "Product",
    width: 230,
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
    width: 230,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 230,
  },
];

export const orderColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "product",
    headerName: "Product",
    width: 230,
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
    width: 230,
  },
];
