import axios from "axios";
import { productUrl } from "../Api/endpoint";

const api = axios.create({
  baseURL: productUrl,
});

export default api;
