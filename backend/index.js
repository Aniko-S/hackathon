const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 46.248363, 20.149343
// 46.247898, 20.148969
// 13 hely

// 46.2482361, 20.1492334
// 46.2479085, 20.1489853
// 10 hely

const idsLeft = [
  "YpZCGyzJU",
  "0VPigWedx",
  "6BnDMt5Yi",
  "zprqIJyZF",
  "Tc7JpjUC3",
  "F18pGKU28",
  "cC7_hMs3r",
  "_lv7d7JtG",
  "bKCZscbsU",
  "KF8Yr9LNm",
  "cQW1T9rg0",
  "dHfU0CahNg",
  "fvU31Q7klw",
];
const first = { x: 46.248369, y: 20.149304 };
const last = { x: 46.247738, y: 20.148778 };
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

const firstR = { x: 46.248226, y: 20.149270 };
const lastR = { x: 46.247703, y: 20.148867 };
const stepR = { x: (firstR.x - lastR.x) / 9, y: (firstR.y - lastR.y) / 9 };
const idsRight = [
  "rLSW1Pbdb",
  "U0tamrRUc",
  "e0vCM72GS",
  "Mmjob5txr",
  "fuTN94itH",
  "4Ca_Ft75X",
  "TbRn-vOeX",
  "8Knl8fbtR",
  "gJl1humPa",
  "rAShfhlWS",
];

for (let i = 0; i < 10; i++) {
  coordinates = {
    ...coordinates,
    [idsRight[9 - i]]: {
      latitude: lastR.x + i * stepR.x,
      longitude: lastR.y + i * stepR.y,
    },
  };
}

console.log("coordinates:", coordinates);

app.post("/parking", (req, res) => {
  Object.keys(req.body).forEach((id) => {
    if(coordinates[id]) {
      coordinates[id].isFree = req.body[id].isFree;
    }
  });
  res.send(coordinates);
});

app.get("/parking", (req, res) => {
  res.send(coordinates);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let coordinatesRight = {};
for (let i = 0; i < 10; i++) {
  coordinatesRight = {
    ...coordinatesRight,
    [idsRight[10 - i]]: {
      latitude: lastR.x + i * stepR.x,
      longitude: lastR.y + i * stepR.y,
    },
  };
}
