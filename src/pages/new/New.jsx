import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://thumbs.dreamstime.com/b/perfil-del-avatar-de-la-mujer-joven-y-elegante-81932605.jpg"
              alt="avatar"
              className=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>
                  <FileUploadIcon />
                </label>
                <input type="file" />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="jhon_doe" />
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder="Jhon Doe" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="jhon_doe@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="tel" placeholder="+34 356 54 89 45" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Calle Falsa 123, Valencia" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Portugal" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
