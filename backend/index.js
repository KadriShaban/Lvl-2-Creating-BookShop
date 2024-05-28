import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "srv1339.hstgr.io",
  user: "u242778090_kadrishaban55",
  password: "Nilofer567",
  database: "u242778090_kadrishaban55",
});

app.get("/", (req, res) => {
  res.json("hello this is backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)";
  const values = [
    "title from backend",
    "desc from backend",
    "cover pic from backend",
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created successfully");
  });
});

app.listen(8800, () => {
  console.log("Connected to Backend!");
});
