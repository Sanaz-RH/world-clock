function updateTime() {
  // Zurich
  let zurichElement = document.querySelector("#zurich");
  let zurichDateElement = zurichElement.querySelector(".date");
  let zurichTimeElement = zurichElement.querySelector(".time");
  let zurichTime = moment().tz("Europe/Zurich");

  zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
  zurichTimeElement.innerHTML = zurichTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Miami
  let miamiElement = document.querySelector("#miami");
  let miamiDateElement = miamiElement.querySelector(".date");
  let miamiTimeElement = miamiElement.querySelector(".time");
  let miamiTime = moment().tz("America/New_York");

  miamiDateElement.innerHTML = miamiTime.format("MMMM Do YYYY");
  miamiTimeElement.innerHTML = miamiTime.format("h:mm:ss [<small>]A[</small>]");

  // Tehran
  let tehranElement = document.querySelector("#tehran");
  let tehranDateElement = tehranElement.querySelector(".date");
  let tehranTimeElement = tehranElement.querySelector(".time");
  let tehranTime = moment().tz("Asia/Tehran");

  tehranDateElement.innerHTML = tehranTime.format("MMMM Do YYYY");
  tehranTimeElement.innerHTML = tehranTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
