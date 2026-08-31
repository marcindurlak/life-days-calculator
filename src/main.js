import "./style.css";
import dayjs from "dayjs";

const form = document.getElementById("form");
const input = document.getElementById("date");
const dialog = document.getElementById("dialog");
const result = document.getElementById("result");
const closeBtn = document.getElementById("close");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const birth = dayjs(input.value);
  const today = dayjs();

  const days = today.diff(birth, "day");

  // następne urodziny
  let nextBirthday = birth.year(today.year());

  if (nextBirthday.isBefore(today)) {
    nextBirthday = nextBirthday.add(1, "year");
  }

  const weeks = nextBirthday.diff(today, "week");

  let extra = "";

  if (birth.date() === today.date() && birth.month() === today.month()) {
    alert("Wszystkiego najlepszego! 🎉");
  } else if (weeks === 0) {
    extra = "Masz urodziny w tym tygodniu!";
  } else {
    extra = `Tygodni do kolejnych urodzin: ${weeks}.`;
  }

  result.textContent = `Minęło dni: ${days}. ${extra}`;

  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
