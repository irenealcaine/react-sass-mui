import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://thumbs.dreamstime.com/b/perfil-del-avatar-de-la-mujer-joven-y-elegante-81932605.jpg"
                alt="avatar"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+34 625 98 65 32</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress: </span>
                  <span className="itemValue">Calle Falsa 123, Valencia</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Portugal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
