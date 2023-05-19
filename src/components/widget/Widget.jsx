import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import 'firebase/firestore';
// import firebase from 'firebase/app';
// import 'firebase/firestore';


const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  const [order, setOrder] = useState(0);
  const [balance, setBalance] = useState(0);
  let data;

  // const amount = 100;
  // const diff = 80;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        query: "users",
        to: "/users",
        icon: (
          <AccountCircleOutlinedIcon
            className="icon"
            style={{ color: "#e11d48", backgroundColor: "#e11d4866" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: true,
        link: "View all orders",
        query: "orders",
        to: "/orders",
        icon: (
          <ListAltOutlinedIcon
            className="icon"
            style={{ color: "#ca8a04", backgroundColor: "#ca8a0466" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        query: "earnings",
        to: "/earnings",
        icon: (
          <AttachMoneyOutlinedIcon
            className="icon"
            style={{ color: "#16a34a", backgroundColor: "#16a34a66" }}
          />
        ),
      };
      break;
    case "product":
      data = {
        title: "PRODUCTS",
        query: "products",
        link: "See details",
        to: "/products",
        icon: (
          <SavingsOutlinedIcon
            className="icon"
            style={{ color: "#ea580c", backgroundColor: "#ea580c66" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );

      const prevMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
        100
      );


    };
    fetchData();

    const obtenerSumaPrecios = async () => {
      try {
        // const db = getFirestore();
        const ordersCol = collection(db, 'orders');
        const snapshot = await getDocs(ordersCol);

        let sumaTotal = 0;
        let sumaPositivos = 0;

        snapshot.forEach((doc) => {
          const orderData = doc.data();
          const price = orderData.price;


          sumaTotal += price;
          setOrder(sumaTotal)

          if (price > 0) {
            sumaPositivos += price;
            setBalance(sumaPositivos)
          }
        });

        console.log('order:', sumaTotal);
        console.log('balance:', sumaPositivos);
      } catch (error) {
        console.error('Error al obtener la suma de precios:', error);
      }
    };
    obtenerSumaPrecios();

  }, []);

  // useEffect(() => {
  //   const obtenerSumaPrecios = async () => {
  //     try {
  //       // const db = firebase.firestore();
  //       const ordersRef = db.collection(type);

  //       const snapshot = await ordersRef.get();

  //       let sumaTotal = 0;

  //       snapshot.forEach((doc) => {
  //         const orderData = doc.data();
  //         const price = orderData.price;
  //         sumaTotal += price;
  //       });

  //       setMoney(sumaTotal);
  //       console.log(money)
  //     } catch (error) {
  //       console.error('Error al obtener la suma de precios:', error);
  //     }
  //   };

  //   obtenerSumaPrecios();
  // }, []);




  // const AAAA = async () => {
  //   const docRef = collection(db, type);
  //   const docSnap = await getDoc(docRef);
  //   console.log(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }

  // }
  // AAAA()


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney ? (data.title === "ORDERS" ? order : balance) : amount} {data.isMoney && "€"}
        </span>
        <Link to={data.to}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowUpOutlinedIcon />
          )}
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
