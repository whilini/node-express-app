const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const isProd = process.env.NODE_ENV === "production"; // development, production, staging

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (!isProd) {
  app.use(morgan("dev"));
  app.use(cors()); // 모든 도메인에 대해서 허용
} else {
  const whiteList = ["https://m.wwweb.exhibition", "https://wwweb.exhibition"];

  app.use(morgan("combined"));
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin) return callback(null, true);

        if (whiteList.indexOf(origin) === -1) {
          const msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
    })
  );
}

app.get("/", (req, res, next) => {
  try {
    const msg = "Hello World";

    return res.send(msg);
  } catch (err) {
    throw new Error(err);
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
