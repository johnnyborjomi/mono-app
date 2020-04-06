const API_URL = "https://api.monobank.ua";
const API_TOKEN = "u0hqhYA9S3mVV0n6Ep4pXZm_-RwKQGzAS5uRHoIva1O0";

const appElem = document.getElementById("app");

fetch(`${API_URL}/bank/currency`)
  .then((res) => res.json())
  .then((res) => {
    appElem.innerHTML = res;
  });

fetch(`${API_URL}/personal/client-info`, {
  headers: {
    "X-Token": API_TOKEN,
  },
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    appElem.innerHTML = res;
  });
