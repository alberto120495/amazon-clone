import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-back-end.herokuapp.com/", //?API (cloud function) ULR
});
//?Verificacion de URL

export default instance;
