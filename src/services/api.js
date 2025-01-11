import axios from "axios";
import i18n from "../i18n";

const api = axios.create({
  baseURL: "https://print.trendline.marketing/api/",
});

api.interceptors.request.use((config) => {
  config.headers["x-lang"] = i18n.language;
  return config;
});

export default api;
