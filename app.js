import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const pool = mysql.createPool({
  host: "localhost",
  user: "come8900",
  password: "dudrb2682!",
  database: "wise_saying",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true,
});

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "https://cdpn.io",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const port = 3000;

//랜덤단건조회
app.get("/wise_sayings/random", async (req, res) => {
  const [[wiseSayingRow]] = await pool.query(
    `
  SELECT * 
  FROM wise_saying 
  ORDER BY RAND()
  LIMIT 1
  `
  );

  if (wiseSayingRow === undefined) {
    res.status(404).json({
      resultCode: "F-1",
      msg: "not found",
    });
    return;
  }

  await pool.query(
    `
  UPDATE wise_saying 
  SET hit_Count = hit_Count + 1
  WHERE id = ?
  `,
    [wiseSayingRow.id]
  );

  wiseSayingRow.hit_Count++;

  res.json({
    resultCode: "S-1",
    msg: "성공",
    data: wiseSayingRow,
  });
});

//
app.patch("/wise_sayings/:id", async (req, res) => {
  const { id } = req.params;
  const [[wiseSayingRow]] = await pool.query(
    `
    SELECT *
    FROM wise_saying
    WHERE id = ?
    `,
    [id]
  );

  if (wiseSayingRow === undefined) {
    res.status(404).json({
      resultCode: "F-1",
      msg: "404 not found",
    });
    return;
  }

  const {
    content = wiseSayingRow.content,
    author = wiseSayingRow.author,
    goodLikeCount = wiseSayingRow.goodLikeCount,
    badLikeCount = wiseSayingRow.badLikeCount,
  } = req.body;

  await pool.query(
    `
    UPDATE wise_saying
    SET content = ?,
    author = ?,
    goodLikeCount = ?,
    badLikeCount = ?
    WHERE id = ?
    `,
    [content, author, goodLikeCount, badLikeCount, id]
  );

  const [[justModifiedWiseSayingRow]] = await pool.query(
    `
    SELECT *
    FROM wise_saying
    WHERE id = ?
    `,
    [id]
  );

  res.json({
    resultCode: "S-1",
    msg: "성공",
    data: justModifiedWiseSayingRow,
  });
});

app.listen(port, () => {
  console.log(`Wise saying app listening on port ${port}`);
});
