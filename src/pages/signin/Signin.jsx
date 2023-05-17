import React, { useState, useContext, useEffect } from "react";
import "./signin.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Login = ({ inputs, title }) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [percentage, setPercentage] = useState(null);

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       dispatch({ type: "LOGIN", payload: user });
  //       navigate("/login");

  //       // ...
  //     })
  //     .catch((error) => {
  //       setError(true);
  //       // ..
  //     });
  // };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  return (
    <div className="signin">
      <form onSubmit={handleAdd}>
        <h1>{title}</h1>
        {/* <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        {inputs.map((input) => (
          <div className="formInput" key={input.id}>
            <label>{input.label}</label>
            <br />
            <input
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              onChange={handleInput}
            />
          </div>
        ))}
        <label htmlFor="file">
          Image: <FileUploadIcon className="icon" />
        </label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
        <button type="submit">Sign in</button>
        {error && <span>Wrong mail or password!</span>}
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
