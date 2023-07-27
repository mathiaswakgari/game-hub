import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "039fede072374603b3928b8ef9faaa83",
  },
});
