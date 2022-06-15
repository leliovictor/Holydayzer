import express from "express";

const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "3/1/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

const today = new Date();
const todayString = today.toLocaleDateString();

const server = express();

server.get("/holidays", (req, res) => {
  res.send(holidays);
});

server.get("/is-today-holiday", (req, res) => {
  const response =
    todayHoliday.length > 0
      ? `Sim, hoje é ${todayHoliday[0].name}`
      : "Não, hoje não é feriado";

  res.send(response);
});

server.get("/holidays/:month", (req, res) => {
  const month = req.params.month;

  const monthHolidays = holidays.filter(
    (obj) => obj.date.split("/", 1).join("") === month
  );

  res.send(monthHolidays);
});

server.listen(4000);
