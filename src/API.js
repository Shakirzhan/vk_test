import axios from "axios";

export default axios.create({
  baseURL: "https://shakirzhan.ru/",
  responseType: "json"
});