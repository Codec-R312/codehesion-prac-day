// axios.js
import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3500",
});

//The API fetch

/* var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Cookie", "ARRAffinity=dc1a2f078f24fbe0b89216feb978960e498e28e19bd2f1012986dcb9f19bd87a; ARRAffinitySameSite=dc1a2f078f24fbe0b89216feb978960e498e28e19bd2f1012986dcb9f19bd87a");

var urlencoded = new URLSearchParams();
urlencoded.append("client_id", "web-dashboard");
urlencoded.append("client_secret", "SuperSecretPassword");
urlencoded.append("username", "admin@codehesion.co.za");
urlencoded.append("password", "P@ssword1");
urlencoded.append("scope", "offline_access mobileApi openid profile role email adminApi ");
urlencoded.append("grant_type", "password");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://edeaf-api-staging.azurewebsites.net/connect/token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); */