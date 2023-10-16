import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "039fede072374603b3928b8ef9faaa83",
  },
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => axiosInstance.get<T>(this.endpoint).then((res) => res.data);
}

export default ApiClient;
