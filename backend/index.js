const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 46.248363, 20.149343
// 46.247898, 20.148969
// 13 hely

const idsLeft = [
  "YpZCGyzJU",
  "0VPigWedx",
  "6BnDMt5Yi",
  "zprqIJyZF",
  "Tc7JpjUC3",
  "F18pGKU28",
  "cC7_hMs3r",
  "lv7d7JtG",
  "bKCZscbsU",
  "KF8Yr9LNm",
  "cQW1T9rg0",
  "dHfU0CahNg",
  "fvU31Q7klw",
];
const first = { x: 46.248363, y: 20.149343 };
const last = { x: 46.247898, y: 20.148969 };
const step = { x: (first.x - last.x) / 12, y: (first.y - last.y) / 12 };

let coordinates = {};
for (let i = 0; i < 13; i++) {
  coordinates = {
    ...coordinates,
    [idsLeft[12 - i]]: {
      latitude: last.x + i * step.x,
      longitude: last.y + i * step.y,
    },
  };
}

console.log(coordinates);

app.post("/parking", (req, res) => {
  Object.keys(req.body).forEach((id) => {
    coordinates[id].isFree = req.body[id].isFree;
  });
  res.send(coordinates);
});

app.get("/parking", (req, res) => {
  res.send(coordinates);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
